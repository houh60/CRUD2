import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployees: Employee[] = [
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
      id: 2,
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
  ];

  constructor() { }

  public getEmployees(): Employee[] {
    return this.listEmployees;
  }

  public getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  public save(employee: Employee): void {
    this.listEmployees.push(employee);
  }
}
