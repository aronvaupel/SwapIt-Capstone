import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { createUser } from './utils/users';
import { addItem, getItems } from './utils/items';
import type { User, Item } from './utils/types';
import { connectDatabase } from './utils/database';
import { getUser } from './utils/users';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());

app.post('/api/users', async (req, res) => {
  const user: User = req.body;
  await createUser(user);
  res.cookie('currentUser', user._id?.toString(), {
    maxAge: 365 * 24 * 60 * 60,
  });
  return res.status(200).send(user);
});

app.post('/api/items', async (req, res) => {
  const userID = req.cookies.currentUser;
  const item: Omit<Item, 'ownerId'> = req.body;
  await addItem(item, userID);
  return res.status(200).send(item);
});

app.get('/api/items/currentuser', async (req, res) => {
  const userID = req.cookies.currentUser;
  const items = await getItems(userID);
  return res.status(200).send(items);
});

app.post('/api/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await getUser(username, password);
    if (!user) {
      res.status(404).send('User not found');
      return;
    }
    if (!user._id) {
      res.status(500).send('ServerError');
      return;
    }
    res.cookie('currentUser', user._id.toString(), {
      maxAge: 365 * 24 * 60 * 60,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

app.get('/api/users/currentuser', (req, res) => {
  const userID = req.cookies.userID;
  if (!userID) {
    res.status(401).send('Wrong Password!');
    return;
  }
  res.json(userID);
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
