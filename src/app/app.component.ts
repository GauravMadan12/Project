import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'GM Productions';

  // Sending data to test (child) class.
  name = "Gaurav Madan";
  message = "";
  data = "New component";
  demo = "";
}
