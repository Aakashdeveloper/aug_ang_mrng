import { Injectable } from '@angular/core';
import {ICustomer} from '../loginforms/login.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class FormPosterService {
    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}

    postCustomer(customer: ICustomer) {
        return this.http.post(this.url, customer);
    }

}
