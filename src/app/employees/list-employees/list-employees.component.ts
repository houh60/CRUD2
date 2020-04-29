import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Jack Sparrow',
      gender: 'Male',
      email: 'jacksparrow@blackpearl.com',
      phoneNumber: 6568579856,
      contactPreference: 'email',
      dateOfBirth: new Date('5/20/1650'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/Jack Sparrow.jpg'
    },
    {
      id: 3,
      name: 'Hector Barbossa',
      gender: 'Male',
      email: 'hectorbarbossa@blackpearl.com',
      phoneNumber: 8566557968,
      contactPreference: 'email',
      dateOfBirth: new Date('5/20/1648'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/Hector Barbossa.jpg'
    },
    {
      id: 3,
      name: 'William Turner',
      gender: 'Male',
      email: 'williamturner@flyingdutchman.com',
      phoneNumber: 6658556798,
      contactPreference: 'email',
      dateOfBirth: new Date('5/20/1670'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/William Turner.jpg',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
