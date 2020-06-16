import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private _id: number;
  public employee: Employee;
  public employees: Employee[];
  public numEmployees: number;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.numEmployees = this.employees.length;
    this.route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this.employeeService.getEmployee(this._id);
    });
  }

  public viewNextEmployee() {
    if(this._id < this.numEmployees) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this.router.navigate(['/employees', this._id]);
  }

}
