require('dotenv').config()
import express from 'express'
import app from './lib/server/server'
import db from './lib/db/db'
import bodyParser from 'body-parser'
import indexRoutes from './routes/indexRoutes'
import apiRouter from './routes/api/apiRouter'

db.connect()

app.useMiddleware(express.json())
app.useMiddleware(bodyParser.urlencoded({extended: true}))

app.addRoutes(apiRouter,'/api')
app.addRoutes(indexRoutes)

app.listen()