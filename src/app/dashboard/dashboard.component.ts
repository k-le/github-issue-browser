import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GitHubAPIService } from '../git-hub-api.service';
import { GitIssue } from '../GitIssue';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  gitInfoForm = this.formBuilder.group({
    owner: ['', [Validators.required]],
    repo: ['', [Validators.required]],
  });

  showWords: boolean[] = [false, false, false];

  constructor(
    private formBuilder: FormBuilder,
    private gitAPIService: GitHubAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get owner() {
    return this.gitInfoForm.get('owner');
  }

  get repo() {
    return this.gitInfoForm.get('repo');
  }

  onSubmit(): void {
    const gitOwner: string = this.gitInfoForm.value.owner;
    const gitRepo: string = this.gitInfoForm.value.repo;

    if (this.gitInfoForm.valid) {
      this.gitInfoForm.reset();
      this.router.navigate(['/issues'], {
        queryParams: { gitOwner: gitOwner, gitRepo: gitRepo },
      });
    }
  }
}
