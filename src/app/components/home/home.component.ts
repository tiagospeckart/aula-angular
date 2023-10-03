import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Criando um vetor(objeto) - funciona igual a ArrayList
  public taskList: string[] = ['Cook', 'Read', 'Study'];

  constructor() {};

  ngOnInit(): void {
      
  }
}
