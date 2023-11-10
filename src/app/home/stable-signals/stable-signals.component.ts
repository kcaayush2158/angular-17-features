import {Component, computed, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

function input() {
  return 2;
}

@Component({
  selector: 'app-stable-signals',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './stable-signals.component.html',
  styleUrl: './stable-signals.component.scss'
})
export class StableSignalsComponent {

  // let computer = signal(1);
  //
  // const result = computed(() => input() + 5); // result would now yield 6
  //
  // computer.set(2);
  //

}
