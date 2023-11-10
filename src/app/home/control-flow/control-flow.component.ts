import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  source: string = 'google';
  loggedIn: boolean = false;

  items =[
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'React'
    },
    {
      id: 3,
      name: 'Javascript'
    }
  ]
}
