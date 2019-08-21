require('dotenv').config();
import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import axios from 'axios';
import { schema } from './schema';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use('*', cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
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

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});