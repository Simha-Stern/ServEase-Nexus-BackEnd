import express, { Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port: string | number | undefined = process.env.PORT;

if (!port) {
  console.error('Port not specified in .env file');
  process.exit(1);
}

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (_req, res: Response) => {
  res.send('Hello World!');
  console.log("i work");
});

app.listen(Number(port), () => {
  console.log(`Hooray! The server is up and running on port ${port}`);
});