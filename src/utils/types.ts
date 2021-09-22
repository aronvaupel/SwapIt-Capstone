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
  ownerId: string;
  itemName: string;
  valueInput: number;
  conditionInput: number;
  description: string;
  itemSrc: string;
};

export type Proposals = {
  _id: string;
  partnerOneId: string;
  partnerTwoId: string;
  partnerOneAccepted: boolean;
  partnerTwoAccepted: boolean;
  itemOneId: string;
  itemTwoId: string;
};
