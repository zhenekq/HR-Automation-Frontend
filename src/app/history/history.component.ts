import { Component, OnInit } from '@angular/core';
import { Candidate } from "../entity/Candidate";
import { CandidateService } from "../service/candidate/candidate.service";
import { ActivatedRoute } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { CandidateHistoryService } from "../service/candidate_history/candidate-history.service";
import { CandidateHistory } from "../entity/CandidateHistory";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history!: CandidateHistory[]
  candidateId: string = ""
  private sub: any;

  constructor(private candidateService: CandidateService,
              private historyService: CandidateHistoryService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getId();
    this.getHistoryByCandidateId(this.candidateId);
  }

  public parseDate(date: Date): string{
    return new Date(date).toLocaleString();
  }

  getId(): string {
    this.sub = this.router.params.subscribe(params => {
      this.candidateId = params['id'];
    })
    return this.sub;
  }


  public getHistoryByCandidateId(candidateId: string): void{
    this.historyService.getHistoryById(candidateId).subscribe(
      (response: CandidateHistory[]) => {
        this.history = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}
