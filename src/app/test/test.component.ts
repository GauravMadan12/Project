import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  // template: `<p>This is a test file</p>
  //            <p>Name is {{ name }}</p>
  //            <p>Length of name is {{ name.length }}</p>
  //            <p>Uppercase of name is {{ name.toUpperCase() }}</p>
  //            <p> Age is {{ 11+10 }}</p>
  //            <p> U are visiting Url {{ url }} </p>
  //            <p>Function call  {{ demo() }}</p> `,
  templateUrl: './test.component.html',
  styles: [`
      .text-success{
          color:green;
      }

      .text-danger{
          color:red;
      }

      .text-special{
           font-style: italic; 
      }
  `]
})
export class TestComponent implements OnInit {
  
  // Property to show input from parent class
   @Input() public parentData;

  // Output from child class
  @Output() public childEvent = new EventEmitter()  
  fireEvent()
  {
      this.childEvent.emit("Hey peoples ")
  }

  // Property binding & Interpolation
  name = "Gaurav";

  url = window.location.href;

  demo()
  {
    return "Hello"
  }

  // Class Binding
  val = true;
  special = false;
  successclass = "text-success";
  messageclass = {
      "text-success": this.val,
      "text-danger" : !this.val,
      "text-special": this.val
    
  }

  // Event Binding
  val1 = "";
  val2 = ""
  names = ""

  onclick(){
    this.val1 = "You clicked a button"
  }

  onClick(event){
    this.val2 = event.type
  }

  // Template reference Variable
  msg = ""
  message(val){
      this.msg = val
  } 

  // Two way binding
  Name = ""
  constructor() { }

  ngOnInit() {
  }

}
