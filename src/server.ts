import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { createUser } from './utils/users';
import { addItem, getItems, getOwnItems, updateItem } from './utils/items';
import type { User, Item, Proposal, Match } from './utils/types';
import { connectDatabase } from './utils/database';
import { getUser } from './utils/users';
import cookieParser from 'cookie-parser';
import {
  createProposal,
  getProposal,
  deleteProposal,
  getOwnProposals,
  readProposals,
} from './utils/proposals';
import { createMatch, deleteMatch, getOwnMatches } from './utils/matches';
import type { ObjectId } from 'bson';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());

app.patch('/api/items/update', async (req, res) => {
  const updatedItem = req.body;
  await updateItem(updatedItem._id, updatedItem.proposedBy);
  res.status(200).json(updatedItem);
});

app.post('/api/swap', async (req, res) => {
  const userID = req.cookies.currentUser;
  const newProposal = req.body;
  const proposalArray = await readProposals();
  console.log(proposalArray);
  if (proposalArray.length === 0) {
    await createProposal(newProposal, userID);
    console.log('No proposals, therefore created new proposal: ', newProposal);
    return res.status(200).send('Proposal created');
  } else {
    const matchingProposal = proposalArray.find(
      (proposal: Proposal) =>
        proposal.users.toString() === newProposal.users.toString() &&
        proposal.items.toString() === newProposal.items.toString()
    );
    if (matchingProposal) {
      await deleteProposal(newProposal);
      await createMatch(newProposal);
      console.log(
        'Matching proposal, therefore created new match: ',
        newProposal
      );
      return res.status(200).send('Match created');
    } else {
      await createProposal(newProposal, userID);
      console.log(
        'No matching proposal, therefore created new proposal:',
        newProposal
      );
      return res.status(200).send('Proposal created');
    }
  }
});

app.get('/api/proposals/currentuser', async (req, res) => {
  const userID = req.cookies.currentUser;
  const proposals = await getOwnProposals(userID);
  return res.status(200).send(proposals);
});

app.get('/api/matches/currentuser', async (req, res) => {
  const userID = req.cookies.currentUser;
  const matches = await getOwnMatches(userID);
  return res.status(200).send(matches);
});

app.delete('/api/matches', async (req, res) => {
  const match = req.body;
  await deleteMatch(match);
  res.send(200).send('Match deleted');
});

app.post('/api/matches', async (req, res) => {
  const match: Match = req.body;
  await createMatch(match);
  return res.status(200).send(match);
});

app.delete('/api/proposals', async (req, res) => {
  const proposal = req.body;
  await deleteProposal(proposal);
  res.send(200).send('Proposal deleted');
});

app.get('/api/proposals', async (req, res) => {
  const { users, items } = req.body;
  try {
    const result = await getProposal(users, items);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(404).send('No such proposal');
  }
});

app.post('/api/proposals', async (req, res) => {
  const userID = req.cookies.currentUser;
  const proposal: Omit<Proposal, 'creator'> = req.body;
  await createProposal(proposal, userID);
  return res.status(200).send(proposal);
});

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
  const formattedUserID: ObjectId = userID;
  const unfilteredItems = await getOwnItems(userID);
  const items = unfilteredItems.filter(
    (item) => formattedUserID !== item.proposedBy
  );
  return res.status(200).send(items);
});

app.get('/api/items/otherusers', async (req, res) => {
  const userID = req.cookies.currentUser;
  const formattedUserID: ObjectId = userID;
  const unfilteredItems = await getItems(userID);
  const items = unfilteredItems.filter(
    (item) => formattedUserID !== item.proposedBy
  );
  return res.status(200).send(items);
});

app.post('/api/login', async (req, res) => {
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
    console.error(error);
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
    console.log(`Swapit-App-Server listening at http://localhost:${port}`);
  });
});
