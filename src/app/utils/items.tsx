import type { Item } from './types';
import { getItemCollection } from './database';

export async function addItem(item: Item): Promise<void> {
  const items = getItemCollection();
  items.insertOne(item);
}
