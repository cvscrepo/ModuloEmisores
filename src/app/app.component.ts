import { Component } from '@angular/core';


//Todo en angular son clases!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
};
