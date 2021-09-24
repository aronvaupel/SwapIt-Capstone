import type { ObjectId } from 'bson';

export type DB = {
  users: User[];
};
export type User = {
  _id?: ObjectId;
  username: string;
  phone: number;
  email: string;
  password: string;
};

export type Item = {
  _id?: ObjectId;
  ownerId: ObjectId;
  itemName: string;
  valueInput: number;
  conditionInput: number;
  description: string;
  itemSrc: string;
  proposed?: boolean;
};

export type Proposal = {
  _id: ObjectId;
  users: ObjectId[];
  items: ObjectId[];
  creator: ObjectId;
};

export type Match = {
  _id: ObjectId;
  users: ObjectId[];
  items: ObjectId[];
};
