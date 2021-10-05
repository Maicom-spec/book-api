import express = require('express')

const Router:express.Router = express.Router()

import ListAllAuthorsController from '../Controllers/ListAllAuthorsController'
import GetSpecificAuthorController from '../Controllers/GetSpecificAuthorController'
import DeleteAuthorController from '../Controllers/DeleteAuthorController'

Router.route('/api/Authors')
    .get(ListAllAuthorsController)

Router.route('/api/Authors/:author')
    .get(GetSpecificAuthorController)
    .delete(DeleteAuthorController)

export default Router
