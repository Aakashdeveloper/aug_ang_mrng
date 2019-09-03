import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../models/cutsomer.model';

@Component({
  selector: 'app-customer-forms',
  templateUrl: './customer-forms.component.html',
  styleUrls: ['./customer-forms.component.css']
})
export class CustomerFormsComponent implements OnInit {

  languages: any[] = ['Reacct', 'Angular', 'Node', 'GoLang'];

  mycustomer = new ICustomer('', '', '', '', true, '', '');

  hasCodelangError: boolean = false;

  validateCodeLang(event): void {
    if (this.mycustomer.codelang === 'default') {
        this.hasCodelangError = true;
    } else {
      this.hasCodelangError = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
