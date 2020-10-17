import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.css']
})
export class ProgramCardComponent implements OnInit {
  @Input() program: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
