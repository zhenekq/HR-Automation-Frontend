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

  constructor(private candidateService: CandidateService) {
  }

  public getCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (response: Candidate[]) => {
        this.candidates = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  ngOnInit() {
    this.getCandidates();
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
}
