import { Component } from '@angular/core';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss']
})
export class AppBodyComponent {
  public title: string = 'Hello people';
  // This function was renamed to avoid confusion with the keyword 'function'
  logButtonClick(): void {
    const CLICKED_BUTTON: string = 'Clicked button';
    console.log(CLICKED_BUTTON);
  }
}

