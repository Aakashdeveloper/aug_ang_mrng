import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../models/cutsomer.model';

@Component({
  selector: 'app-customer-forms',
  templateUrl: './customer-forms.component.html',
  styleUrls: ['./customer-forms.component.css']
})
export class CustomerFormsComponent implements OnInit {

  mycustomer = new ICustomer('AAAA', 'BBBB', 'a@a.com');

  constructor() { }

  ngOnInit() {
  }

}
