import { AttributeType } from "./AttributeType";

export class CandidateAttributes{
  private _id: number;
  private _value: string;
  private _valueSource: number;
  private _candidateId: string;
  private _attributeTypes: AttributeType;


  constructor(id: number, value: string, valueSource: number, candidateId: string, attributeTypes: AttributeType) {
    this._id = id;
    this._value = value;
    this._valueSource = valueSource;
    this._candidateId = candidateId;
    this._attributeTypes = attributeTypes;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get valueSource(): number {
    return this._valueSource;
  }

  set valueSource(value: number) {
    this._valueSource = value;
  }

  get candidateId(): string {
    return this._candidateId;
  }

  set candidateId(value: string) {
    this._candidateId = value;
  }

  get attributeTypes(): AttributeType {
    return this._attributeTypes;
  }

  set attributeTypes(value: AttributeType) {
    this._attributeTypes = value;
  }
}
