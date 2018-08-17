import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  getEmployee(){
    return [    {"id": 1, "name":"Gaurav", "age": 21},
    {"id": 2, "name":"Rahul", "age": 20},
    {"id": 3, "name":"Dhruv", "age": 23},
    {"id": 4, "name":"Mayank", "age": 21}    ]
  
  }
  constructor() { }
}
