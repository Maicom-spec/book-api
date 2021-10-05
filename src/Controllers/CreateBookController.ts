import {Request, Response} from 'express'

import Book from '../models/Book'
import Author from '../models/Author'

const _ = require('lodash')

function handle(req:Request, res:Response){
    const title = _.capitalize(req.body.title)
    const author = _.capitalize(req.body.author)
    const pagesNumber = req.body.pagesNumber
    const readed = req.body.readed
    
    const book = new Book ({
        title,
        author,
        pagesNumber,
        readed
    })

    const authors = new Author ({
        authorName: author,
    })

    if(!title || !author || !pagesNumber || !readed){
        res.send(`You forgot to add one item`)
    }

    Book.find({title}, (err, results) => {
        if(results.length !== 0){
            res.send(`File already on database`)
        } else {
            book.save((error: any) => {
                if(!error){
                    res.send('Succesfully added')
                    Author.find({authorName:author}, (err, results) => {
        
                        if(err){
                            throw new Error(`There is an err: ${err}`)
                        } else {
                            if(results.length > 0){
                                const authorname = results[0].authorName
                
                                Author.findOneAndUpdate({authorName: authorname}, ({$push: {books: book}}), ({useFindAndModify: false}), (err, results) => {
                                    if(err){
                                        throw new Error(`There is an error ${err}`)
                                    }else {
                                        // console.log(results)
                                    }
                                })
                            } else {
                                authors.save((err:any, doc:any) => {
                                    const authorName = doc.authorName
                                    if(err){
                                        throw new Error(`There is a n new error ${err}`)
                                    } else {
                                        Author.findOneAndUpdate({authorName}, ({$push: {books: book}}), ({useFindAndModify: false}), (err, results) => {
                                            if(err){
                                                throw new Error(`There is an error ${err}`)
                                            } else {
                                                return
                                            }
                                        })
                                    }
                                })
                            }
                        }
                    })
                } else {
                    res.send(error)
                }
            })
        }
    })
}

export default handle