import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Candidate } from "../entity/Candidate";
import { CombinedSearchFilterPipe } from "../filter/combined_filter/combined-search-filter.pipe";
import { CandidateAttributes } from "../entity/CandidateAttributes";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseUrl = environment.baseAPIUrl

  constructor(private http: HttpClient) { }

  public getCandidates(): Observable<any>{
    return this.http.get(`${this.baseUrl}/candidates?pageNumber=1&pageSize=1100`)
  }

  public getCandidateById(candidateId: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/candidates/${candidateId}`)
  }

  public updateByCandidateId(candidateId: string, candidateAttributes: CandidateAttributes[]): Observable<any>{
    return this.http.post(`${this.baseUrl}/candidates/${candidateId}/attributes`, candidateAttributes);
  }
}
