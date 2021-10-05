import {Request, Response} from 'express'
import Book from '../models/Book'

function handle(req:Request, res:Response) {
    const author = req.params.author

    Book.find({author: {$regex: author, $options: 'i'}}, (err, docs) => {
        if(err){
            throw new Error(`There is an error ${err}`)
        } else {
            if(docs.length > 0){

                const authors:Array<String> = []

                docs.map(
                    (book) => {
                        const author = book.author

                        if(!(authors.includes(author))) {
                            authors.push(author)
                        } 
                    }
                )

                res.send(authors.map(author => author))

            } else {
                res.send(`There is no author ${author}`)
            }
        }
    })
}

export default handle