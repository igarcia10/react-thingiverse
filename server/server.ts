import express from 'express';
import cors from 'cors';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use('*', cors());


//Routes
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Static files
app.use(express.static('dist'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});