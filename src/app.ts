const greeting: string = 'heelo';

const numbers: number[] = [1,2,3];

import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 5000;

const twit = require('twit');

const users = [];

// const twitter = new twit({
//   consumer_key: '',
//   consumer_secret: ' ... ',
//   access_token: ' ... ',
//   access_token_secret: ' ... '
// })

//Next step - push this to heroku check how to deploy correctly then deploy frontend to test if this setup will work 
//on simple setup

const cors = require('cors');



const app: Application= express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));



const tweets: string[] = ['tweet1', 'MAMAMAMA', 'asdasdasdasd'];

app.get('/tweet', (req: Request, res: Response) => {
  res.send(tweets);
});

app.listen(port, () => console.log(`Server started on port ${port}`));