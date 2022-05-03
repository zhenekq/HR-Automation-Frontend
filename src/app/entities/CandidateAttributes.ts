import { AttributeType } from "./AttributeType";

export interface CandidateAttributes{
  id: number,
  value: string,
  valueSource: number,
  candidateId: string,
  attributeTypes: AttributeType
}
