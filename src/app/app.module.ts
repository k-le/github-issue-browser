import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { RepoIssuesComponent } from './repo-issues/repo-issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { HeroComponent } from './hero/hero.component';
import { IssueSearchComponent } from './issue-search/issue-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    RepoIssuesComponent,
    IssueDetailComponent,
    HeroComponent,
    IssueSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
