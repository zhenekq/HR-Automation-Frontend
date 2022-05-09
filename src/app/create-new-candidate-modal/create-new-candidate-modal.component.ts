import { Component, OnInit } from '@angular/core';
import { CandidateService } from "../service/candidate/candidate.service";
import { Candidate } from "../entity/Candidate";
import { Router, RouterLink } from "@angular/router";
import { CandidateAttributes } from "../entity/CandidateAttributes";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-create-new-candidate-modal',
  templateUrl: './create-new-candidate-modal.component.html',
  styleUrls: ['./create-new-candidate-modal.component.css']
})
export class CreateNewCandidateModalComponent implements OnInit {

  candidate: Candidate = {} as Candidate;
  identifier!: string;
  status!: string;

  constructor(private service: CandidateService,
              private router: Router,
              private toast: ToastrService) {}

  ngOnInit(): void {
  }

  createCandidate(){
    this.candidate.id = this.identifier;
    this.candidate.status = this.status.toLocaleLowerCase();
    this.candidate.lastContact = new Date();
    this.service.createCandidate(this.candidate).subscribe(
      (response: Candidate) => {
        this.toast.success("Candidate created successfully");
        setTimeout(() => {
          this.router.navigate([`/candidates/${this.candidate.id}`])
        }, 2000)
      },
      (error: HttpErrorResponse) => {
        this.toast.error("Candidate exists!");
      }
    )
  }


  create() {
    this.router.navigate(['/candidates'])
  }
}
