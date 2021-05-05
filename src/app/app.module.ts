import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuthOptions } from '@okta/okta-auth-js';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { RepoIssuesComponent } from './repo-issues/repo-issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

import { AccessGuard } from './access.guard';

const oktaConfig: OktaAuthOptions = {
  issuer: 'https://accounts.spotify.com/authorize',
  clientId: '5b69da35d323490590e53bdfa927596e',
  redirectUri: window.location.origin + '/dashboard',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  responseType: 'code',
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    RepoIssuesComponent,
    IssueDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    OktaAuthModule,
  ],
  providers: [AccessGuard, { provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
