import {Request, Response} from 'express'
import Book from '../models/Book'

const _ = require('lodash')

function handle(req:Request, res:Response) {
    const uriTitle = _.capitalize(req.params.book)
    const title = _.capitalize(req.body.title)

    Book.find({title: uriTitle}, (err:any, results:any) => {
        if(err){
            throw new Error(`There is an error ${err}`)
        } else {
            if(results.length > 0){
                Book.find({title}, (err:any, docs:any) => {
                    if(docs.length > 0){
                        res.send(`File with name ${title} exists`)
                    } else {
                        Book.findOneAndUpdate({title: uriTitle}, {$set: req.body}, {useFindAndModify: false}, (err:any, results:any) => {
                            if(err){
                                throw new Error(`There is an error ${err}`)
                            } else {
                                res.send('Succesfull actualized')
                            }
                        })
                    }
                })
            } else {
                res.send(`File with name ${uriTitle} not exists`)
            }
        }
    })

}

export default handle