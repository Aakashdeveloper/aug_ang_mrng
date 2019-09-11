import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormsComponent } from './registerform/Registerforms.component';
import { LoginComponent } from './loginforms/loginforms.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRegisterFormsComponent } from './Adminregisterform/AdminRegisterforms.component';
import { AdminGaurdService } from './admin-gaurd.service';
import { LoginGaurdService } from './login-gaurd.service';

const routes: Routes = [
  {path: 'register', component: RegisterFormsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', canActivate: [LoginGaurdService] , component: ProfileComponent},
  {path: 'admin', canActivate: [AdminGaurdService] ,
   component: AdminRegisterFormsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGaurdService, LoginGaurdService]
})
export class AppRoutingModule { }
