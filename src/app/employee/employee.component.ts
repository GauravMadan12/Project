import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  employee = []

  constructor( private _employeeservice : EmployeeserviceService) { }

  ngOnInit() {
    this.employee = this._employeeservice.getEmployee()
  }

}
