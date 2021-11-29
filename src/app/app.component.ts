import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dreams-FE';
  sideNavOpen = true

  sideNavToggled(){
    this.sideNavOpen =!this.sideNavOpen
  }}
