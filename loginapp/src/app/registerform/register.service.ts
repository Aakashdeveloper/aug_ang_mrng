import { Injectable } from '@angular/core';
import {RegisterModel} from './regsiter.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()

export class RegsiterService {
    private url = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient) {}

    postCustomer(user: RegisterModel) {
        return this.http.post(this.url, user);

    }

}
