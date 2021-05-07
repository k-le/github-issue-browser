import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { GitIssue } from '../GitIssue';
import { GitHubAPIService } from '../git-hub-api.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-issue-search',
  templateUrl: './issue-search.component.html',
  styleUrls: ['./issue-search.component.css'],
})
export class IssueSearchComponent implements OnInit {
  searchedIssues$: Observable<GitIssue[]>;

  @Input() issues: GitIssue[];
  @Input() gitOwner: string;
  @Input() gitRepo: string;

  private searchTerms = new Subject<string>();

  constructor(
    private gitAPIService: GitHubAPIService,
    private router: Router
  ) {}

  /**
   * Pushes a search term into the Observable stream.
   * @param term - Search term to filter issues.
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchedIssues$ = this.searchTerms.pipe(
      // Wait 300ms after each keystroke before considering the term.
      debounceTime(300),

      // Ignore the new term if it's the same as the previous term.
      distinctUntilChanged(),

      // Switch to a new observable each time the term changes.
      switchMap((term: string) =>
        this.gitAPIService.searchIssues(term, this.issues)
      )
    );
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

  isFocused(elem: HTMLElement): boolean {
    return elem === document.activeElement;
  }
}
