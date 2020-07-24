import dotenv from 'dotenv';
import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';

dotenv.config();

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions : Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT

}

const handleAppStart = () => console.log(`Listening on port ${PORT}`);


//Create Database connection First, then start the app.
createConnection(connectionOptions).then(() => {
    app.start(appOptions, handleAppStart);
})
