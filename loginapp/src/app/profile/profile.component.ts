import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService} from '../loginforms/login.service';

@Component({
  selector: 'app-customer-forms',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {




  constructor(private loginService: LoginService) {}




  submitForm(form: NgForm): void {
    // console.log(form.value);
    /*this.formPosterService.postCustomer(form.value)
      .subscribe((res) => console.log('data submitted'));
*/

  }



  ngOnInit() {
  }

}
