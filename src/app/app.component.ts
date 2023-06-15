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
  currentAction : any;

  constructor(private router : Router) {
  }
  handleRoute(action: any) {
    this.currentAction = action;
    this.router.navigateByUrl(action.route);

  }
}
