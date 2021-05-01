import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GitHubAPIService } from '../git-hub-api.service';

@Component({
  selector: 'app-repo-issues',
  templateUrl: './repo-issues.component.html',
  styleUrls: ['./repo-issues.component.css'],
})
export class RepoIssuesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gitAPIService: GitHubAPIService
  ) {}

  ngOnInit(): void {}
}
