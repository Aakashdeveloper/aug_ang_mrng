import { Component } from '@angular/core';
import { AdminRegisterModel } from './Adminregsiter.model';
import { NgForm } from '@angular/forms';
import { RegsiterService} from '../registerform/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-forms',
  templateUrl: './AdminRegisterforms.component.html',
  styleUrls: ['./AdminRegisterforms.component.css']
})
export class AdminRegisterFormsComponent {

  role: any[] = ['admin', 'user'];

  user = new AdminRegisterModel('John', 'a@a.com', '12345', '');


  constructor(private regsiterService: RegsiterService,
              private router: Router) {}



  submitForm(form: NgForm): void {
    this.regsiterService.postCustomer(form.value)
      .subscribe((res) =>  this.router.navigate(['/login']));


  }

}
