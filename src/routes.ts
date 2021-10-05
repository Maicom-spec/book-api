import express = require('express')

import BookRoutes from './Routes/Books.routes'
import AuthorRoutes from './Routes/Author.routes'

const Router: express.Router = express.Router()

Router.use(BookRoutes)
Router.use(AuthorRoutes)

module.exports = Router