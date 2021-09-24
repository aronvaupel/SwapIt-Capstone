import type { User } from './types';
import { getUserCollection } from './database';

export async function createUser(user: User): Promise<Partial<User>> {
  const users = getUserCollection();
  const result = await users.insertOne(user);
  return { _id: result.insertedId, username: user.username };
}

export async function getUser(
  username: string,
  password: string
): Promise<User | null> {
  const userCollection = getUserCollection();
  const user = await userCollection.findOne({ username, password });
  return user;
}
