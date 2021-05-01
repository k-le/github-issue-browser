import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { GitIssue } from './GitIssue';

@Injectable({
  providedIn: 'root',
})
export class GitHubAPIService {
  constructor(private http: HttpClient) {}

  /**
   * Creates the GitHub API URL for a desired GitHub owner and repository.
   * @param owner Owner of GitHub repository.
   * @param repo Designated GitHub repository.
   * @returns Endpoint URL of GitHub API to fetch data from.
   */
  private getIssuesURL(owner: string, repo: string): string {
    const repoIssuesURL: string = `https://api.github.com/repos/${owner}/${repo}/issues`;
    return repoIssuesURL;
  }

  /**
   * GET GitHub Issues from the GitHub API.
   * @param issueUrl Endpoint URL of GitHub API to fetch issues from.
   * @returns Observable of type GitIssue that contains all issues fetched from the repository.
   */
  getGitHubIssues(owner: string, repo: string): Observable<GitIssue[]> {
    const repoIssuesUrl: string = this.getIssuesURL(owner, repo);
    return this.http.get<GitIssue[]>(repoIssuesUrl);
  }
}
