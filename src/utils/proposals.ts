import type { Proposal } from './types';
import { getProposalCollection } from './database';
import type { ObjectId } from 'mongodb';

export async function createProposal(proposal: Proposal): Promise<void> {
  const proposals = getProposalCollection();
  await proposals.insertOne(proposal);
}

export async function deleteProposal(proposal: Proposal): Promise<void> {
  const proposals = getProposalCollection();
  await proposals.deleteOne(proposal);
}

export async function getProposal(
  users: string[],
  items: string[]
): Promise<Proposal | null> {
  const proposals = getProposalCollection();
  const proposal = await proposals.findOne({ users, items });
  return proposal;
}

export async function getOwnProposals(owner: ObjectId): Promise<Proposal[]> {
  const items = getProposalCollection();
  return await items.find({ creator: owner }).toArray();
}
export async function readProposals(): Promise<Proposal[]> {
  const proposalCollection = getProposalCollection();
  const proposals = await proposalCollection.find().toArray();
  return proposals;
}
