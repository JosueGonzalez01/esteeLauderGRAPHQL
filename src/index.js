import express from "express";
import { graphqlHTTP } from 'express-graphql';
import schema from"./schema";
import {connect} from "./database"

const app = express();
connect();

app.use('/',graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.listen(5000, () => console.log('Server on port 5000'));