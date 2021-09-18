import { MongoClient } from 'mongodb';
import type { Collection } from 'mongodb';
import type { User, Item } from './types';

let client: MongoClient;

export async function connectDatabase(url: string): Promise<void> {
  client = new MongoClient(url);
  await client.connect();
}

export function getCollection<T>(name: string): Collection<T> {
  return client.db().collection<T>(name);
}

export function getUserCollection(): Collection<User> {
  return getCollection<User>('users');
}

export function getItemCollection(): Collection<Item> {
  return getCollection<Item>('items');
}
