import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { GitIssue, mockIssues } from './GitIssue';
import { IssueComment, mockComments } from './IssueComment';

@Injectable({
  providedIn: 'root',
})
export class GitHubAPIService {
  constructor(private http: HttpClient) {}

  /**
   * Creates the GitHub API URL for a desired GitHub owner and repository.
   * @param owner - Owner of GitHub repository.
   * @param repo - Designated GitHub repository.
   * @returns - Endpoint URL of GitHub API to fetch data from.
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
      tap((_) => console.log(`Fetched issues from /${owner}/${repo}`)),
      catchError(this.handleError<GitIssue[]>('getGitHubIssues', []))
    );
  }

  /**
   * GET the GitHub issue that corresponds with the issue number.
   * @param issueNum - The number of the GitHub issue.
   */
  getIssue(
    owner: string,
    repo: string,
    issueNum: number
  ): Observable<GitIssue> {
    const issueUrl: string = this.getIssuesURL(owner, repo);
    return this.http.get<GitIssue>(issueUrl + `/${issueNum}`).pipe(
      tap((_) =>
        console.log(`Fetched issue from ${owner}/${repo}/${issueNum}`)
      ),
      catchError(this.handleError<GitIssue>('getIssue'))
    );
  }

  private getCommentsURL(
    owner: string,
    repo: string,
    issueNum: number
  ): string {
    const commentsURL: string = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNum}/comments`;
    return commentsURL;
  }

  getIssueComments(
    owner: string,
    repo: string,
    issueNum: number
  ): Observable<IssueComment[]> {
    const commentsUrl: string = this.getCommentsURL(owner, repo, issueNum);
    return this.http.get<IssueComment[]>(commentsUrl).pipe(
      tap((_) =>
        console.log(
          `Fetched comments from ${owner}/${repo}, issue #${issueNum}`
        )
      ),
      catchError(this.handleError<IssueComment[]>('getGitHubIssues', []))
    );
  }

  private matchIssueTitle(element: string, term: string, index, array) {
    return element.indexOf(term) >= 0;
  }

  searchIssues(term: string, issues: GitIssue[]): Observable<GitIssue[]> {
    // If we trim the term of all whitespace and it's empty, then we
    // return an empty GitIssue array.
    if (!term.trim) {
      return of([]);
    }
    const lowerCased: string = term.toLowerCase();
    return of(
      issues.filter(
        (issue) =>
          issue.title.toLowerCase().indexOf(lowerCased) >= 0 ||
          String(issue.number).indexOf(lowerCased) >= 0
      )
    ).pipe(
      tap((x) =>
        x.length
          ? console.log(`found ${x} issues matching '${term}'`)
          : console.log(`no issues found matching ${term}`)
      ),
      catchError(this.handleError<GitIssue[]>('searchIssues', []))
    );
  }

  /**
   * Formats a date-time string/number into custom date format.
   * @param date - The date-time string or number to be formatted.
   */
  getFormattedDate(date: string | number): string {
    return formatDate(date, 'dd MMM yy, h:mm a z', 'en-US');
  }

  shortenTextBody(body: string, length: number): string {
    return body.substring(0, length);
  }
}
