import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  gitInfoForm = this.formBuilder.group({
    owner: '',
    repo: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    window.alert(`Searching:\n
    Owner: ${this.gitInfoForm.value.owner}\n
    Repo: ${this.gitInfoForm.value.repo}`);
    this.gitInfoForm.reset();
  }
}
