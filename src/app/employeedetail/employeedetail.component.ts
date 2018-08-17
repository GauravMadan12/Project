import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styles: []
})
export class EmployeedetailComponent implements OnInit {

  employee = []

  constructor( private _employeeservice : EmployeeserviceService ) { }

  ngOnInit() {
    this.employee = this._employeeservice.getEmployee()
  }

}
