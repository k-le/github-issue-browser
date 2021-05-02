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
    return formatDate(date, 'dd MMM yy, h:mm a z', 'en-US');
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
}
