import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public photoPath = '';
  public previewPhoto = false;
  public datePickerConfig: Partial<BsDatepickerConfig>;
  public passwordConfirmed: boolean;
  public employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };
  public departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' },
  ];
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
  }

  public saveEmployee(): void {
    this.employee.photoPath = 'assets/images/' + this.employee.photoPath.substr(this.employee.photoPath.lastIndexOf('\\') + 1);
    this.employee.department = this.departments.find(department => department.id === parseInt(this.employee.department)).name;
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  public hidePreview(): void {
    this.previewPhoto = false;
  }

  public togglePhotoPreview(): void {
    this.photoPath = 'assets/images/' + this.employee.photoPath.substr(this.employee.photoPath.lastIndexOf('\\') + 1);
    this.previewPhoto = !this.previewPhoto;
  }

  public toConfirmPassword(): void {
    if(this.employee.password === this.employee.confirmPassword) {
      this.passwordConfirmed = true;
    } else {
      this.passwordConfirmed = false;
    }
  }

}
