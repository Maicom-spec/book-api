import mongoose = require('mongoose')
const Schema = mongoose.Schema
interface Book
    {
        title: string,
        author: string,
        pagesNumber: number,
        readed: boolean

    }

const BookSchema = new Schema<Book>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        requires: true
    },
    pagesNumber: {
        type: Number,
        require: true
    },
    readed: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model('Book', BookSchema)