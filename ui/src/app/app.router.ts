import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AppComponent} from "./app.component";

import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
const appRoutes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'signup',component: SignupComponent },
  { path:'*',component: DashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRouter {

}
