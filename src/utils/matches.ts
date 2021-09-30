import type { Match } from './types';
import { getMatchCollection } from './database';
import type { ObjectId } from 'mongodb';

export async function createMatch(match: Match): Promise<void> {
  const matches = getMatchCollection();
  await matches.insertOne(match);
}

export async function deleteMatch(match: Match): Promise<void> {
  const matches = getMatchCollection();
  await matches.deleteOne(match);
}

export async function getOwnMatches(user: ObjectId): Promise<Match[]> {
  const matches = getMatchCollection();
  return await matches.find({ users: [{ $in: { user } }] }).toArray();
}
