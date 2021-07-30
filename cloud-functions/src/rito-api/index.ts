// import libraries
import * as express from 'express';
import * as bodyParser from "body-parser";
import { validateFirebaseIdToken } from './middlewares/Authorization'

// initialize express server
const app = express()
const main = express()

// add the path to receive request and set json as bodyParser to process the body 
main.use('/api/v1', app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))
main.use(validateFirebaseIdToken)

main.get('/', (req: any, res) => {
  console.log('req.user: ', req.user)
  res.send('result')
})

main.put('/account/summonerId', (req, res) => {
  // const summonerId = req.body.summonerId
})


export default main