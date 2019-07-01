const greeting: string = 'heelo';

const dotenv = require('dotenv');
dotenv.config();
const numbers: number[] = [1,2,3];


import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT;

const twit = require('twit');

const users = [];

// const twitter = new twit({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// })

console.log(process.env.TWITTER_CONSUMER_KEY);
console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET);


const cors = require('cors');



const app: Application= express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));



const tweets: string[] = ['tweet1', 'MAMAMAMA', 'asdasdasdasd'];

app.get('/tweet', (req: Request, res: Response) => {
  res.send(tweets);
});

app.listen(port, () => console.log(`Server started on PORT ${port}`));