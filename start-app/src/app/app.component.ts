import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'start-app';
  print(email:any)
  {
    console.log(email);

  }
  name:string='';
  




}
