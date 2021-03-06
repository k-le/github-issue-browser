import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IssueBrowser';

  isFocused(elem: HTMLElement): boolean {
    return elem === document.activeElement;
  }
}
