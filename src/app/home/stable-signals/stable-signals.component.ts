import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-stable-signals',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './stable-signals.component.html',
  styleUrl: './stable-signals.component.scss'
})
export class StableSignalsComponent {

}
