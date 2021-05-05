import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

import { authCodeFlowConfig } from '../authCodeFlowConfig';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private oktaAuthService: OktaAuthService) {
    this.oktaAuthService.$authenticationState.subscribe(
      (isLoggedIn: boolean) => (this.isLoggedIn = isLoggedIn)
    );
  }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn = await this.oktaAuthService.isAuthenticated();
  }

  logIn(): void {
    this.oktaAuthService.signInWithRedirect();
  }

  async logOut(): Promise<void> {
    await this.oktaAuthService.signOut();
  }
}
