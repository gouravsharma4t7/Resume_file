import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/LoginComponent';
import { AuthRoutes } from './auth.routing';
import { RegistrationComponent } from './ragistration/registration.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
