import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Candidate } from "./entities/Candidate";

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
}
