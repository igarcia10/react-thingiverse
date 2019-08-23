require('dotenv').config();
import console = require('console');
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import cors from 'cors';
import axios from 'axios';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import ThingiverseAPI from './ThingiverseAPI';

// Initializations
const app = express();
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
        token: req.headers.authorization
    }),
    dataSources: () => ({ thingiverseAPI: new ThingiverseAPI() })
});

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use('*', cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

//Routes
app.post('/auth', (req, res) => {
    axios.request({
        method: 'POST',
        url: 'https://www.thingiverse.com/login/oauth/access_token',
        params: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: req.body.code,
        }
    }).then(r => res.json(r.data))
        .catch(err => {
            console.log(err.message);
            res.send('there was an error')
        });
});

// Static files
app.use(express.static('dist'));

// Starting the servers
app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));
server.listen().then(({ url }) => console.log(`Apollo Server ready at ${url}`));