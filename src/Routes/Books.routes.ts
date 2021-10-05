import express = require('express')

import ListAllBooksController from '../Controllers/ListAllBooksController'
import CreateBookController from '../Controllers/CreateBookController'
import GetSpecificBookController from '../Controllers/GetSpecificBookController'
import PatchBookController from '../Controllers/PatchBookController'
import PutBookController from '../Controllers/PutBookControoler'
import DeleteBookController from '../Controllers/DeleteBookController'

const Router: express.Router = express.Router()

Router.route('/api/Books')
    .get(ListAllBooksController)
    .post(CreateBookController)

Router.route('/api/Books/:book')
    .get(GetSpecificBookController)
    .put(PutBookController)
    .patch(PatchBookController)
    .delete(DeleteBookController)


export default Router