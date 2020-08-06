import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(process.env.PORT)
console.log(`Starting for http://localhost${process.env.PORT}`)