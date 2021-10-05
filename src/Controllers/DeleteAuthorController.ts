import {Request, Response} from 'express'
import Author from '../models/Author'
import Book from '../models/Book'

const _ = require('lodash')

function handle(req:Request, res:Response) {
    const authorName = _.capitalize(req.params.author)

    Author.findOneAndRemove({authorName}, {useFindAndModify: false}, (err:any, result:any) => {

        if(err){
            throw new Error(`There is an error ${err}`)
        } else {
            if(result === null) {
                res.send(`There is no file with name ${authorName}`)
            } else {
                res.send('File deleted successfully')
                Book.deleteMany({author: authorName}, (err:any) => {
                    if(err){
                        throw new Error(`There is an error ${err}`)
                    }
                })
            }
        }
    })
}

export default handle