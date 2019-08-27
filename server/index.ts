require('dotenv').config();
import console = require('console');
import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import cors from 'cors';
import axios from 'axios';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import ThingiverseAPI from './ThingiverseAPI';
import path from 'path';

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
app.use(cors());
app.use(express.json());
server.applyMiddleware({ app, path: '/graphql' });

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
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Starting the servers
app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));
