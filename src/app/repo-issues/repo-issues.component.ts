import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { formatDate, Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { GitHubAPIService } from '../git-hub-api.service';
import { GitIssue } from '../GitIssue';

@Component({
  selector: 'app-repo-issues',
  templateUrl: './repo-issues.component.html',
  styleUrls: ['./repo-issues.component.css'],
})
export class RepoIssuesComponent implements OnInit {
  // Current page number for pagination. Starts at page 1.
  page: number = 1;

  // Number of items per page. Starts at 10 items per page.
  pageSize: number = 6;
  gitOwner: string;
  gitRepo: string;
  gitIssues: GitIssue[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private gitAPIService: GitHubAPIService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.gitOwner = params['gitOwner'];
      this.gitRepo = params['gitRepo'];
    });

    // Subscribe to the method that fetches GitHub Issues and store the return Subscription value to unsubscribe later.
    this.subscription = this.gitAPIService
      .getGitHubIssues(this.gitOwner, this.gitRepo)
      .subscribe((issues) => (this.gitIssues = issues));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Formats a date-time string/number into custom date format.
   * @param date - The date-time string or number to be formatted.
   */
  getFormattedDate(date: string | number): string {
    return this.gitAPIService.getFormattedDate(date);
  }

  openDetails(issueNum: number): void {
    this.router.navigate([`/issues/detail`], {
      queryParams: {
        gitOwner: this.gitOwner,
        gitRepo: this.gitRepo,
        issueNum: issueNum,
      },
    });
  }

  getShortenedTextBody(textBody: string): string {
    if (textBody.length <= 100) {
      return textBody;
    } else {
      return this.gitAPIService.shortenTextBody(textBody, 100) + '...';
    }
  }

  changePageSize(size: number): void {
    this.pageSize = size;
  }

  isFocused(elem: HTMLElement): boolean {
    return elem === document.activeElement;
  }
}
