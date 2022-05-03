import { CandidateAttributes } from "./CandidateAttributes";
import { Timestamp } from "rxjs";
import { Keyword } from "./Keyword";

export interface Candidate{
  id: string,
  lastContact: Date,
  status: string,
  candidateAttributes: CandidateAttributes[],
  keywords: Keyword[]
}
