import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { createUser } from './app/utils/CRUDfunctions';
import type { User } from './app/utils/types';
import { connectDatabase } from './app/utils/database';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/users', async (req, res) => {
  const user: User = req.body;
  await createUser(user);
  return res.status(200).send(user);
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

if (!process.env.MONGODB_URL) {
  throw new Error('No mongo database available!');
}

connectDatabase(process.env.MONGODB_URL).then(() => {
  console.log('connected to db');
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
