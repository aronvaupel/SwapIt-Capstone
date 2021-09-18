import type { User } from './types';
import { getUserCollection } from './database';

export async function createUser(user: User): Promise<void> {
  const users = getUserCollection();
  users.insertOne(user);
}
