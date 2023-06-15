import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions = [
    {route : "/home" , title : "Home" , icon : "house"},
    {route : "/gpt" , title : "GPT" , icon: "person"},
  ]
  title = 'angular-Gpt-ChatBot';

  constructor(private router : Router) {
  }
  handleRoute(action: any) {
    this.router.navigateByUrl(action.route);

  }
}
