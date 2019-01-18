import express from 'express';
import {convert} from './routes/convert';

const app = express();

app.get('/', convert);

app.listen(3000, () => console.log('Listening on port 3000'));