import { CandidateAttributes } from "./CandidateAttributes";

export interface Candidate{
  id: string,
  lastContact: Date,
  status: string,
  candidateAttributes: CandidateAttributes[]
}
