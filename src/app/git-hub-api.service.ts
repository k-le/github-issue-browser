import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { GitIssue, mockIssues } from './GitIssue';

@Injectable({
  providedIn: 'root',
})
export class GitHubAPIService {
  constructor(private http: HttpClient) {}

  /**
   * Creates the GitHub API URL for a desired GitHub owner and repository.
   * @param owner - Owner of GitHub repository.
   * @param repo - Designated GitHub repository.
   * @returns Endpoint URL of GitHub API to fetch data from.
   */
  private getIssuesURL(owner: string, repo: string): string {
    const repoIssuesURL: string = `https://api.github.com/repos/${owner}/${repo}/issues`;
    return repoIssuesURL;
  }

  /**
   * Handle the HTTP operation that failed.
   * Let the app continue.
   * @param operation - Name of the operation that failed.
   * @param result - Optional value to return as the observable result.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Log to the console (but we want to send the error to a logging infrastructure).
      console.error(error);

      // Allow the app to keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * GET GitHub Issues from the GitHub API.
   * @param issueUrl - Endpoint URL of GitHub API to fetch issues from.
   * @returns - Observable of type GitIssue that contains all issues fetched from the repository.
   */
  getGitHubIssues(owner: string, repo: string): Observable<GitIssue[]> {
    const repoIssuesUrl: string = this.getIssuesURL(owner, repo);
    return this.http.get<GitIssue[]>(repoIssuesUrl).pipe(
      tap((_) => window.alert(`Fetched issues from /${owner}/${repo}`)),
      catchError(this.handleError<GitIssue[]>('getGitHubIssues', []))
    );
  }

  // getGitHubIssues(owner: string, repo: string): Observable<GitIssue[]> {
  //   const issues = of(mockIssues);
  //   return issues;
  // }
}
