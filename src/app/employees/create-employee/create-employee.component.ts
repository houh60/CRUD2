import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public photoPath = '';
  set wholePath(p: string) {
    this.photoPath = 'assets/images/' + p.substr(p.lastIndexOf('\\') + 1);
  }

  public previewPhoto = false;
  public dateOfBirth: Date = new Date(2018, 0, 1);
  public datePickerConfig: Partial<BsDatepickerConfig>;

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
        showWeekNumbers: true,
        minDate: new Date(2019, 11, 1),
        maxDate: new Date(2020, 4, 1),
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
  }

  public saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }

  public togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }

}
