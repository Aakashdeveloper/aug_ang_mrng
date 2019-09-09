import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './regsiter.model';
import { NgForm } from '@angular/forms';
import { FormPosterService} from '../loginforms/login.service';

@Component({
  selector: 'app-customer-forms',
  templateUrl: './customer-forms.component.html',
  styleUrls: ['./customer-forms.component.css']
})
export class RegisterFormsComponent {


  register = new RegisterModel('John', 'a@a.com', '12345');


  constructor(private formPosterService: FormPosterService) {}



  submitForm(form: NgForm): void {
    // console.log(form.value);
    this.formPosterService.postCustomer(form.value)
      .subscribe((res) => console.log('data submitted'));


  }

}
