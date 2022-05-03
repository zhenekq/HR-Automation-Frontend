import { Component, OnInit } from '@angular/core';
import { CandidateService } from "../candidate.service";
import { Candidate } from "../entities/Candidate";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-current-candidate',
  templateUrl: './current-candidate.component.html',
  styleUrls: ['./current-candidate.component.css']
})
export class CurrentCandidateComponent implements OnInit {

  candidate: Candidate | undefined
  lastContact: Date | undefined
  candidateId: string = ""
  private sub : any

  constructor(private candidateService: CandidateService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.candidateId = params['id'];
    })
    this.getCandidateById(this.candidateId)
  }



  public getCandidateById(candidateId: string): void{
    this.candidateService.getCandidateById(candidateId).subscribe(
      (response: Candidate) => {
        this.candidate = response
        this.lastContact = this.candidate.lastContact
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}
