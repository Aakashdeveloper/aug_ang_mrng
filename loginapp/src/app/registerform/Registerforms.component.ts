import { Component } from '@angular/core';
import { RegisterModel } from './regsiter.model';
import { NgForm } from '@angular/forms';
import { RegsiterService} from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-forms',
  templateUrl: './Registerforms.component.html',
  styleUrls: ['./Registerforms.component.css']
})
export class RegisterFormsComponent {


  register = new RegisterModel('John', 'a@a.com', '12345');


  constructor(private regsiterService: RegsiterService,
              private router: Router) {}



  submitForm(form: NgForm): void {
    this.regsiterService.postCustomer(form.value)
      .subscribe((res) =>  this.router.navigate(['/login']));


  }

}
