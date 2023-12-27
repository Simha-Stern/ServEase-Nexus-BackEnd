import express, { Response } from 'express';

const port: number = 8081;

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (_req, res: Response) => {
  res.send('Hello World! my name is simha stern!');
});

app.listen(Number(port), () => {
  console.log(`Hooray! The server is up and running on port ${port}`);
});


