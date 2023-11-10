import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {Angular14Component} from "./angular-14/angular-14.component";
import {Angular15Component} from "./angular-15/angular-15.component";
import {Angular16Component} from "./angular-16/angular-16.component";

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule,RouterModule,Angular14Component,Angular15Component,Angular16Component],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {

}
