// import libraries
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { validateFirebaseIdToken } from './middlewares/Authorization'
import { errorHandler } from './middlewares/ErrorHandler'
import routes from './routes'

// initialize express server
const app = express()
const main = express()

// add the path to receive request and set json as bodyParser to process the body

main.use(cors({ origin: true }))
main.use('/api/v1', app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))
main.use(validateFirebaseIdToken)

// configure api route controllers
main.use('/account', routes.AccountController)
main.use('/admin', routes.AdminController)

// configure error handling
main.use(errorHandler)

export default main
