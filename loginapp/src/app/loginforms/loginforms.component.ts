import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginforms.component.html',
  styleUrls: ['./loginforms.component.css']
})
export class  LoginComponent {


  login = new LoginModel( 'a@a.com', '12345');


  constructor(private loginService: LoginService) {}


  submitForm(form: NgForm): void {
    // console.log(form.value);
    /*this.formPosterService.postCustomer(form.value)
      .subscribe((res) => console.log('data submitted'));*/


  }


}
