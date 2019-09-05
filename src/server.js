import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import routes from './routes';

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-fa981.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
