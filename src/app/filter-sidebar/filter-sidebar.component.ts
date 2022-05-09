import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent implements OnInit {

  private _firstname: string = "";
  private _lastname: string = "";
  private _city: string = "";
  private _passport: string = "";
  private _company: string = "";
  private _email: string = "";
  private _phone: string = "";


  constructor() { }

  ngOnInit(): void {
  }


  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get city(): string {
    return this._city;
  }

  get passport(): string {
    return this._passport;
  }

  get company(): string {
    return this._company;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }
}
