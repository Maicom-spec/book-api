import mongoose, { Date } from 'mongoose'
const Schema = mongoose.Schema

interface Author 
    {
        authorName: String,
        books: Array<String>
    }

const AuthorSchema = new Schema<Author>({
    authorName: {
        type: String,
        required: true
    },
    books: {
        type: Array,
        required: true
    } 
})

export default mongoose.model('Author', AuthorSchema)