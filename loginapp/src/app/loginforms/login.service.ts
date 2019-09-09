import { Injectable } from '@angular/core';
import {LoginModel} from './login.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class LoginService {
    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}

    postCustomer(customer: LoginModel) {
        return this.http.post(this.url, customer);
    }

}
