import type { User } from './types';
import { getUserCollection } from './database';

export async function createUser(user: User): Promise<void> {
  const users = getUserCollection();
  users.insertOne(user);
}

export async function getUser(username: string): Promise<User | null> {
  const userCollection = getUserCollection();
  const user = await userCollection.findOne({ username });
  return user;
}
