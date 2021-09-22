import type { Item } from './types';
import { getItemCollection } from './database';

export async function addItem(
  item: Omit<Item, 'ownerId'>,
  owner: string
): Promise<void> {
  const items = getItemCollection();

  await items.insertOne({ ownerId: owner, ...item });
}

export async function getOwnItems(owner: string): Promise<Item[]> {
  const items = getItemCollection();
  return await items.find({ ownerId: owner }).toArray();
}

export async function getItems(owner: string): Promise<Item[]> {
  const items = getItemCollection();
  return items
    .find((item: { ownerId: string }) => item.ownerId !== owner)
    .toArray();
}
