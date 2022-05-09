import { CandidateAttributes } from "./CandidateAttributes";
import { Timestamp } from "rxjs";
import { Keyword } from "./Keyword";

export class Candidate{
  private _id: string;
  private _lastContact: Date;
  private _status: string;
  private _candidateAttributes: CandidateAttributes[];
  private _keywords: Keyword[];

  constructor(id: string, lastContact: Date, status: string, candidateAttributes: CandidateAttributes[], keywords: Keyword[]) {
    this._id = id;
    this._lastContact = lastContact;
    this._status = status;
    this._candidateAttributes = candidateAttributes;
    this._keywords = keywords;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get lastContact(): Date {
    return this._lastContact;
  }

  set lastContact(value: Date) {
    this._lastContact = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get candidateAttributes(): CandidateAttributes[] {
    return this._candidateAttributes;
  }

  set candidateAttributes(value: CandidateAttributes[]) {
    this._candidateAttributes = value;
  }

  get keywords(): Keyword[] {
    return this._keywords;
  }

  set keywords(value: Keyword[]) {
    this._keywords = value;
  }
}
