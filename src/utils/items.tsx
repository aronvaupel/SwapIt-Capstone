import type { Item } from './types';
import { getItemCollection } from './database';

export async function addItem(
  item: Omit<Item, 'ownerId'>,
  owner: string
): Promise<void> {
  const items = getItemCollection();
  console.log(item);
  items.insertOne({ ownerId: owner, ...item });
}

export async function getItems(owner: string): Promise<Item[]> {
  const items = getItemCollection();
  return items.find({ ownerId: owner }).toArray();
}
