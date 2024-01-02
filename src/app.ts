import express, { Response } from 'express';
import cors from "cors";
import morgan from "morgan";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import { config } from 'dotenv';
import { typeDefs } from "./schemas_gql/schema.js";
import { resolvers } from './schemas_gql/resolves.js';
import path from 'path';
import router from './routers/useRouter.js';
import { connectToPg } from './conections/conectToPG.js';


const envPath = path.resolve(__dirname, '../../../.env');
config({ path: envPath });
const envport = parseInt(process.env.SERVER_PORT!);
const port = Number(envport)
console.log(port, typeof(port));

const app = express();

app.use(express.json());
app.use(cors({}));
app.use(morgan('dev'));

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,

  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer })
  ],
});

server.start().then(async () => {

  connectToPg()
  app.use('/', cors(), expressMiddleware(server));
  app.use('/api', router);

  app.get('/', (_req, res: Response) => {
    res.send('Hello World! my name is simha stern!');
  });

  httpServer.listen({ port });
  console.log(`🚀 Hooray! The server is up and running on port ${port}`);
});


