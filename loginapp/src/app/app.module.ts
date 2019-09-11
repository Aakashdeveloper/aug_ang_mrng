import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormsComponent } from './registerform/Registerforms.component';
import { LoginComponent } from './loginforms/loginforms.component';
import { LoginService } from './loginforms/login.service';
import { ProfileComponent } from './profile/profile.component';
import { RegsiterService } from './registerform/register.service';
import { AdminRegisterFormsComponent } from './Adminregisterform/AdminRegisterforms.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormsComponent,
    LoginComponent,
    ProfileComponent,
    AdminRegisterFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegsiterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
