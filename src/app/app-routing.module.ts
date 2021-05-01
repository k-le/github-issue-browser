import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RepoIssuesComponent } from './repo-issues/repo-issues.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'issues', component: RepoIssuesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
