import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './employee.form.html'
})

export class EmployeeComponent implements OnInit {

    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['John', [Validators.required, Validators.minLength(3)]]
        });
    }
}
