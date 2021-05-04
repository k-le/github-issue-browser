import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  gitAuthUrl: string = 'https://github.com/login/oauth/authorize';

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.http.get(this.gitAuthUrl);
  }
}
