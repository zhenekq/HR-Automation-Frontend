import { Candidate } from "./Candidate";

export class CandidateHistory {
  private _id: number;
  private _createDate: Date;
  private _updateDate: Date;
  private _comment: string;
  private _candidate: Candidate;


  constructor(id: number, createDate: Date, updateDate: Date, comment: string, candidate: Candidate) {
    this._id = id;
    this._createDate = createDate;
    this._updateDate = updateDate;
    this._comment = comment;
    this._candidate = candidate;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get createDate(): Date {
    return this._createDate;
  }

  set createDate(value: Date) {
    this._createDate = value;
  }

  get updateDate(): Date {
    return this._updateDate;
  }

  set updateDate(value: Date) {
    this._updateDate = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get candidate(): Candidate {
    return this._candidate;
  }

  set candidate(value: Candidate) {
    this._candidate = value;
  }
}
