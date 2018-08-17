import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeserviceService } from './employeeservice.service';
 
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PipesComponent,
    EmployeeComponent,
    EmployeedetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
