import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CandidatesComponent } from './candidate/candidates.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { CurrentCandidateComponent } from './current-candidate/current-candidate.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from "ng2-order-pipe";
import { CandidateService } from "./candidate/candidate.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from './filter/one_by_all_data/search-filter.pipe';
import { FilterSidebarComponent } from './filter-sidebar/filter-sidebar.component';
import { CombinedSearchFilterPipe } from './filter/combined_filter/combined-search-filter.pipe';
import { NgToastModule, NgToastService } from "ng-angular-popup";
import { ToastrModule } from "ngx-toastr";

const appRoutes: Routes = [
  {path: 'candidates', component: CandidatesComponent},
  {path: 'candidates/:id', component: CurrentCandidateComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CandidatesComponent,
    CurrentCandidateComponent,
    NotFoundComponent,
    SearchFilterPipe,
    FilterSidebarComponent,
    CombinedSearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
