import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutModule} from "./shared/layout/layout.module";
import {RouterModule} from "@angular/router";
import {APP_ROUTING} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    SigninComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(APP_ROUTING),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
