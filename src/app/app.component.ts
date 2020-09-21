import { Component } from '@angular/core';
import { EnrolleeService } from './enrolleeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private enroleeService: EnrolleeService) { }
  title = 'front-end-coding-test';
  // myName = this.enroleeService.name;
}
