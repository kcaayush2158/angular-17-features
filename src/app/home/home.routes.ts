import { Route } from "@angular/router";
import {HomeComponent} from "./home.component";
import {ControlFlowComponent} from "./control-flow/control-flow.component";
import {DeferrableViewsComponent} from "./deferrable-views/deferrable-views.component";
import {StableSignalsComponent} from "./stable-signals/stable-signals.component";


export const route: Route[] = [
  { path : '' , component: ControlFlowComponent},
  { path : 'control-flow' , component: ControlFlowComponent},
  { path : 'deferrable-views' , component: DeferrableViewsComponent},
  { path : 'stable-signals' , component: StableSignalsComponent}
]
