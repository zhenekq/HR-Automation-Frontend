import { Component, OnInit } from '@angular/core';
import { CandidateService } from "../candidate/candidate.service";
import { Candidate } from "../entity/Candidate";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { CandidateAttributes } from "../entity/CandidateAttributes";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-current-candidate',
  templateUrl: './current-candidate.component.html',
  styleUrls: ['./current-candidate.component.css']
})
export class CurrentCandidateComponent implements OnInit {

  candidate!: Candidate
  lastContact!: Date
  candidateId: string = ""
  private sub: any

  constructor(private candidateService: CandidateService,
              private router: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getId()
    this.getCandidateById(this.candidateId)
  }

  getId(): string {
    this.sub = this.router.params.subscribe(params => {
      this.candidateId = params['id'];
    })
    return this.sub;
  }

  public updateCandidateInfoById(candidateId: string, candidateAttributes: CandidateAttributes[]){
    this.candidateService.updateByCandidateId(candidateId, candidateAttributes);
  }

  public getCandidateById(candidateId: string): void {
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

  setCandidateDataForUpdate(firstname: string, lastname: string, email: string, phone: string, city: string,
                            cityzenship: string, company: string, passport_number: string, date: string, twitter: string,
                            linkedin: string, facebook: string, telegram: string, github: string){
    for (let i = 0; i < this.candidate.candidateAttributes.length; i++) {
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("firstname".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = firstname;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("lastname".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = lastname;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("email".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = email;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("phone".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = phone;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("city".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = city;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("cityzenship".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = cityzenship;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("company".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = company;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("passport_number".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = passport_number;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("date".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = date;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("twitter".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = twitter;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("linkedin".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = linkedin;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("facebook".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = facebook;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("telegram".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = telegram;
      if (this.candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match("github".toLocaleLowerCase()))
        this.candidate.candidateAttributes[i].value = github;
    }
  }


  updateCandidateInfo() {
    this.candidateService.updateByCandidateId(this.candidateId, this.candidate.candidateAttributes).subscribe(
      (response: CandidateAttributes[]) => {
        console.log(123);
        this.toastr.success("Candidate updated successfully!")
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toastr.warning("Candidate does not updated!")
      }
    )
  }
}
