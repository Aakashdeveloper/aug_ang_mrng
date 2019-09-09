import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormsComponent } from './registerform/Registerforms.component';
import { LoginComponent } from './loginforms/loginforms.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'register', component: RegisterFormsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
