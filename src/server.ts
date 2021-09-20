import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { createUser } from './app/utils/users';
import { addItem } from './app/utils/items';
import type { User, Item } from './app/utils/types';
import { connectDatabase } from './app/utils/database';
import { getUser } from './app/utils/users';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/users', async (req, res) => {
  const user: User = req.body;
  await createUser(user);
  return res.status(200).send(user);
});

app.post('/api/items', async (req, res) => {
  const item: Item = req.body;
  await addItem(item);
  return res.status(200).send(item);
});

app.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await getUser(username, password);
    if (!user) {
      res.status(404).send('User or password is incorrect');
      alert('User or password is incorrect');
      return;
    }
    res.setHeader(
      'Set-Cookie',
      `userId=${user._id};path=/;Max-Age=${365 * 24 * 60 * 60}`
    );
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
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
