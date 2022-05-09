import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CandidateHistory } from "../../entity/CandidateHistory";

@Injectable({
  providedIn: 'root'
})
export class CandidateHistoryService {

  private baseUrl = environment.baseAPIUrl

  constructor(private http: HttpClient) {}

  public getHistoryById(candidateId: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/candidates/${candidateId}/history`);
  }
}
