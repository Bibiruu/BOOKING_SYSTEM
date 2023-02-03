import cors from 'cors'
import express from 'express'
import routes from './routes.js'

const app = express()
app.use(cors())

//parsing the data for us 
app.use(express.json())

const port = process.env.PORT || 3000

app.use(routes) 

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})