import type { Item } from './types';
import { getItemCollection } from './database';
import { ObjectId } from 'mongodb';

export async function addItem(
  item: Omit<Item, 'ownerId'>,
  owner: ObjectId
): Promise<void> {
  const items = getItemCollection();
  await items.insertOne({ ownerId: owner, ...item });
}
export async function getOwnItems(owner: ObjectId): Promise<Item[]> {
  const items = getItemCollection();
  return await items.find({ ownerId: owner }).toArray();
}

export async function getItems(owner: ObjectId): Promise<Item[]> {
  const items = getItemCollection();
  return await items.find({ ownerId: { $ne: owner } }).toArray();
}

export async function updateItem(
  id: ObjectId,
  proposer: ObjectId
): Promise<void> {
  const items = getItemCollection();
  await items.updateOne(
    { _id: new ObjectId(id) },
    { $set: { proposedBy: proposer } }
  );
}
