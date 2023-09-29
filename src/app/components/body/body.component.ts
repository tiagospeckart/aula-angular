import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  public title: string = 'Hello people';
  logButtonClick(): void {
    const CLICKED_BUTTON: string = 'Clicked button';
    console.log(CLICKED_BUTTON);
  }
}
