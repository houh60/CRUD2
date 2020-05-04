import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public photoPath = '';
  public previewPhoto = false;
  public datePickerConfig: Partial<BsDatepickerConfig>;
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
  };
  public departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' },
  ];
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
  }

  public saveEmployee(emp: Employee): void {
    console.log(emp);
  }

  public hidePreview(): void {
    this.previewPhoto = false;
  }

  public togglePhotoPreview(): void {
    this.photoPath = 'assets/images/' + this.employee.photoPath.substr(this.employee.photoPath.lastIndexOf('\\') + 1);
    this.previewPhoto = !this.previewPhoto;
  }

}
