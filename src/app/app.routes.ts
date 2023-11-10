import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./home/home.routes').then(m => m.route)
  }
];
