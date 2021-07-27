//import libraries
import * as express from 'express';
import * as bodyParser from "body-parser";

//initialize express server
const app = express();
const main = express();

//add the path to receive request and set json as bodyParser to process the body 
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

main.get('/', (req, res) => {
  res.send('result')
})

export default main