export type DB = {
  users: User[];
};
export type User = {
  username: string;
  phone: number;
  email: string;
  password: string;
};

export type Item = {
  itemName: string;
  valueInput: number;
  conditionInput: number;
  description: string;
  itemSrc: string;
};

export type Proposals = {
  username: string;
  item: string;
  src: string;
  partnername: string;
  partneritem: string;
  partnersrc: string;
  partnerphone: number;
  partneremail: string;
  match: false;
};
