import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // If the attribute is private, HTML can't access it
  private nome: string = 'John Doe';
  private arr1: number[] = [1, 2, 3];
  private arr2: number[] = [500, 100, 7, 378.32];
  public title: string = 'Hello people';

  ngOnInit(): void {
    console.log("Hello World");
    
    // Call to calculate average for two different arrays
    this.calculateAverage(this.arr1);
    this.calculateAverage(this.arr2);
    
    // Call to verify two different strings
    this.verifyString("Não é Devs");
    this.verifyString("devs2blu");
    
    // Call to calculate interest
    this.calculateInterest(100, 3, 12);
    
    // Call to count vowels and consonants
    this.countVowelsConsonants("ExampleString");
  }

  // This function was renamed to avoid confusion with the keyword 'function'
  logButtonClick(): void {
    const CLICKED_BUTTON: string = 'Clicked button';
    console.log(CLICKED_BUTTON);
  }

  calculateAverage(numbers: number[]): void {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const average = sum / numbers.length;
    console.log(`The average of ${numbers} is ${average}`);
  }

  verifyString(text: string): void {
    const length = text.length;
    const comparison = text === "devs2blu" ? "equal" : "different";
    console.log(`The text "${text}" has ${length} characters and is ${comparison} to "devs2blu".`);
  }

  calculateInterest(principal: number, rate: number, months: number): void {
    const amount = principal * Math.pow(1 + rate / 100, months);
    console.log(`The total amount after ${months} months is ${amount.toFixed(2)}.`);
  }

  countVowelsConsonants(text: string): void {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0, consonantCount = 0;

    for (let char of text) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (char.match(/[a-zA-Z]/)) {
        consonantCount++;
      }
    }
    console.log(`Number of vowels of "${text}" is: ${vowelCount}, Number of consonants: ${consonantCount}`);
  }
}
