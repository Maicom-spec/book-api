import {Request, Response} from 'express'
import Book from '../models/Book'

const _ = require('lodash')

function handle(req:Request, res:Response) {
    const bookTitle = _.capitalize(req.params.book)

    Book.find({title: bookTitle}, (err, result) => {
        if(!err){
            if(result.length !== 0){
                res.json(result)
            } else {
                res.send(`There is no file with name ${bookTitle}`)
            }
        } else {
            res.send(err)
        }
    })
}

export default handle
