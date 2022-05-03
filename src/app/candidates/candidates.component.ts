import { Component, OnInit } from '@angular/core';
import { Candidate } from "../entities/Candidate";
import { CandidateService } from "../candidate.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  public candidates: Candidate[] = []
  id: string = "";
  status: string = "";
  emails: string[] = []
  pageNumber: number = 1;
  pageSize: number = 2;


  constructor(private candidateService: CandidateService) {
  }

  public getCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (response: Candidate[]) => {
        this.candidates = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  getEmail(candidate: Candidate): string{
    let email = ""
    for(let i = 0; i< candidate.candidateAttributes.length;i++){
      if(candidate.candidateAttributes[i].attributeTypes.name === 'email') {
        email = candidate.candidateAttributes[i].value;
        break
      }
    }
    return email
  }

  ngOnInit() {
    this.getCandidates();
  }

  parseDate(date: Date): string{
    return new Date(date).toLocaleString()
  }

  Search(){
    if(this.id == ""){
      this.ngOnInit()
    }else{
      this.candidates = this.candidates.filter(res => {
        return res.id.toLocaleLowerCase().match(this.id.toLocaleLowerCase())
      })
    }
  }

  getCandidateFIO(candidate: Candidate): string{
    let firstname = ""
    let lastname = ""
    for(let i = 0; i < candidate.candidateAttributes.length; i++){
      if(candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("firstname".toLocaleLowerCase()))
        firstname = candidate.candidateAttributes[i].value
      if(candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("lastname".toLocaleLowerCase()))
        lastname = candidate.candidateAttributes[i].value
    }
    return firstname + " " + lastname;
  }

  getCandidateKeywords(candidate: Candidate): string[]{
    let keywords: string[] = []
    for(let i = 0; i < candidate.keywords.length;i++){
      keywords.push(candidate.keywords[i].id)
    }
    return keywords;
  }

}
