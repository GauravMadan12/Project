import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {

  name = "Gaurav Madan";
  messages = "Welcome to GM productions";
  person = {
      "fname" : "Gaurav",
      "lname" : "Madan"
  }

  public date = new Date();
  
   @Input() public invar ;
  constructor() { }

  @Output() public outvar = new EventEmitter()

  onFire()
  {
    this.outvar.emit("This is Output Data from Child class")
  }
  ngOnInit() {
  }

}
