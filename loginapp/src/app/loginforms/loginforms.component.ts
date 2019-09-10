import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginforms.component.html',
  styleUrls: ['./loginforms.component.css']
})
export class  LoginComponent {


  login = new LoginModel( 'a@a.com', '12345678');


  constructor(private loginService: LoginService,
              private router: Router) {}


  submitForm(form: NgForm): void {
    this.loginService.loginUser(form.value)
      .subscribe((res) => this.loginService.getUserRole(res['token'])
      .subscribe((response) => this.userRole(response["role"]))
    );
  }

  userRole(typeofUser): void {
    localStorage.setItem('ROLE_TYPE', typeofUser);
    this.router.navigate(['/profile']);
  }


}
