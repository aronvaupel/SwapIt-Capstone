export type DB = {
  users: User[];
};
export type User = {
  _id: string;
  username: string;
  phone: number;
  email: string;
  password: string;
};

export type Item = {
  _id: string;
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
