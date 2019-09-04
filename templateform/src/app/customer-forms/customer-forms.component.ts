import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../models/cutsomer.model';
import { NgForm } from '@angular/forms';
import { FormPosterService} from '../services/form-poster.service';

@Component({
  selector: 'app-customer-forms',
  templateUrl: './customer-forms.component.html',
  styleUrls: ['./customer-forms.component.css']
})
export class CustomerFormsComponent implements OnInit {


  languages: any[] = ['Reacct', 'Angular', 'Node', 'GoLang'];

  mycustomer = new ICustomer('John', 'Alis', 'a@a.com', '12345', true, '', '');

  hasCodelangError: boolean = false;

  constructor(private formPosterService: FormPosterService) {}

  validateCodeLang(event): void {
    if (this.mycustomer.codelang === 'default') {
        this.hasCodelangError = true;
    } else {
      this.hasCodelangError = false;
    }
  }

  firstToUpper(value: string): void {
    if (value.length > 0) {
      this.mycustomer.firstName =  value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.mycustomer.firstName = value;
    }
  }

  submitForm(form: NgForm): void {
    // console.log(form.value);
    this.formPosterService.postCustomer(form.value)
      .subscribe((res) => console.log('data submitted'));


  }



  ngOnInit() {
  }

}
