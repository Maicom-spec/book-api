import {Request, Response} from 'express'

import Book from '../models/Book'
import Author from '../models/Author'

const _ = require('lodash')

function handle(req:Request, res:Response) {
    const title = _.capitalize(req.params.book)

    Book.findOneAndRemove({title},{useFindAndModify: false}, (err: any, result:any) => {
        const authorName = result.author

        if(result === null && !err){
            res.send(`There is no file with name ${title}`)
        }else if (result !== null && !err){
            Author.findOneAndDelete({authorName}, {useFindAndModify: false}, (err:any) => {
                if(err) {
                    throw new Error(`There in an error ${err}`)
                } else {
                    res.send(`Successfully deleted`)
                }
            })
        }else if (err){
            res.send(err)
        }

    })
}

export default handle