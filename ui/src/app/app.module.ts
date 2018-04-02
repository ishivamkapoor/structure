import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AppRouter} from "./app.router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material";
import { FinancialYearViewComponent } from './financial-year-view/financial-year-view.component';
import { FinancialYearAddEditComponent } from './financial-year-add-edit/financial-year-add-edit.component';
import { StateViewComponent } from './state-view/state-view.component';
import { StateAddEditComponent } from './state-add-edit/state-add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    FinancialYearViewComponent,
    FinancialYearAddEditComponent,
    StateViewComponent,
    StateAddEditComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,AppRouter,
    MatInputModule,MatButtonModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
