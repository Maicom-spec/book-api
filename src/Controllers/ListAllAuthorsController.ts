import {Request, Response} from 'express'
import Author from "../models/Author"

function handle(req:Request, res:Response){
    Author.find({}, (err, docs) => {
        if(err){
            throw new Error(`There is an error`)
        } else {
            res.json(docs)
        }
    })
}

export default handle