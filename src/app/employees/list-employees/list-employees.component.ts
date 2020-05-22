import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  public employees: Employee[];

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
