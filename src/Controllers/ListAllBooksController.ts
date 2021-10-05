import {Request, Response} from 'express'
import Book from '../models/Book'

function handle(req:Request, res:Response) {
    
    Book.find({}, (err, articles) => {
        if(err){
            res.send(err)
        } else{
            res.json(articles)
        }
        
    })
        
}

export default handle
