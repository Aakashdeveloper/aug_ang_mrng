import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './regsiter.model';
import { NgForm } from '@angular/forms';
import { RegsiterService} from './register.service';

@Component({
  selector: 'app-register-forms',
  templateUrl: './Registerforms.component.html',
  styleUrls: ['./Registerforms.component.css']
})
export class RegisterFormsComponent {


  register = new RegisterModel('John', 'a@a.com', '12345');


  constructor(private formPosterService: RegsiterService) {}



  submitForm(form: NgForm): void {
    // console.log(form.value);
    /*this.formPosterService.postCustomer(form.value)
      .subscribe((res) => console.log('data submitted'));*/


  }

}
