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
    window.alert(`${this.gitOwner}, ${this.gitRepo}, ${this.issueNum}`);
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

  shortenBody(commentBody: string): string {
    if (commentBody.length > 95) {
      return commentBody.substring(0, 94) + '...';
    } else {
      return commentBody;
    }
  }
}
