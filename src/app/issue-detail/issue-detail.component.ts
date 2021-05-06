import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GitHubAPIService } from '../git-hub-api.service';
import { GitIssue } from '../GitIssue';
import { IssueComment } from '../IssueComment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
})
export class IssueDetailComponent implements OnInit {
  gitOwner: string;
  gitRepo: string;
  issueNum: number;
  issue: GitIssue;
  issueComments: IssueComment[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gitAPIService: GitHubAPIService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.gitOwner = params['gitOwner'];
      this.gitRepo = params['gitRepo'];
      this.issueNum = params['issueNum'];
    });
    this.getIssue();
    this.getComments();
  }

  getIssue(): Subscription {
    return this.gitAPIService
      .getIssue(this.gitOwner, this.gitRepo, this.issueNum)
      .subscribe((gitIssue) => (this.issue = gitIssue));
  }

  getComments(): Subscription {
    return this.gitAPIService
      .getIssueComments(this.gitOwner, this.gitRepo, this.issueNum)
      .subscribe((comments) => (this.issueComments = comments));
  }

  /**
   * Formats a date-time string/number into custom date format.
   * @param date - The date-time string or number to be formatted.
   */
  getFormattedDate(date: string | number): string {
    return this.gitAPIService.getFormattedDate(date);
  }

  goBack(): void {
    this.location.back();
  }

  shortenBody(commentBody: string): string {
    if (commentBody.length <= 250) {
      return commentBody;
    } else {
      return this.gitAPIService.shortenTextBody(commentBody, 250) + '...';
    }
  }
}
