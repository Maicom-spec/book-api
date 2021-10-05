import {Request, Response} from 'express'

import Book from '../models/Book'

function handle(req: Request, res:Response) {
    
    const uriTitle = req.params.book

        const title = req.body.title
        const author = req.body.author
        const pagesNumber = req.body.pagesNumber
        const readed = req.body.readed

        Book.find({title:uriTitle}, (err, file) => {
            if(err){
                throw new Error(`There is an error: ${err}`)
            } else {
                if(file.length > 0){
                    Book.find({title}, (err, doc) => {
                        if(err){
                            throw new Error(`There is an error: ${err}`)
                        } else {
                            if(doc.length > 0){
                                res.send('You already have this file')
                            } else {
                                Book.findOneAndReplace(
                                    {title: uriTitle},
                                    {title:title, author:author, pagesNumber:pagesNumber,readed:readed},
                                    {useFindAndModify:false,returnOriginal:false},
                                    (err, doc) => {
                                        if(err){
                                            throw new Error(`There is an error: ${err}`)
                                        } else {
                                            res.send('File successfully added')
                                        }
                                    }
                                )
                            }
                        }
                    })
                } else {
                    res.send(`file with name '${uriTitle}' not exists`)
                }
            }
        })
}

export default handle