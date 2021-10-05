import express = require('express')
import cors = require('cors')
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/bookApi', {useNewUrlParser: true, useUnifiedTopology: true})

const router = require('./routes.ts')

const app: express.Application = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(router)

module.exports = app