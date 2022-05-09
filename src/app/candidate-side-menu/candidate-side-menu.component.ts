import { Component, OnInit } from '@angular/core';
import { CandidateService } from "../service/candidate/candidate.service";
import { Candidate } from "../entity/Candidate";
import { ActivatedRoute } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-candidate-side-menu',
  templateUrl: './candidate-side-menu.component.html',
  styleUrls: ['./candidate-side-menu.component.css']
})
export class CandidateSideMenuComponent implements OnInit {

  candidate!: Candidate;
  candidateId: string = "";
  sub: any;

  constructor(private candidateService: CandidateService,
              private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.getId()
    console.log(this.getId())
    this.getCandidateById(this.candidateId)
  }

  getId(): string {
    this.sub = this.router.params.subscribe(params => {
      this.candidateId = params['id'];
    })
    return this.sub;
  }

  public getCandidateById(candidateId: string): void {
    this.candidateService.getCandidateById(candidateId).subscribe(
      (response: Candidate) => {
        this.candidate = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  parseDate(date: Date): string {
    return new Date(date).toLocaleString()
  }

  parseDateOfBirth(date: Date): string{
    return new Date(date).toDateString();
  }

  public getCandidateData(candidate: Candidate, column: string): string {
    for (let i = 0; i < candidate.candidateAttributes.length; i++) {
      if (candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match(column.toLocaleLowerCase()))
        return candidate.candidateAttributes[i].value
    }
    return "";
  }

}
