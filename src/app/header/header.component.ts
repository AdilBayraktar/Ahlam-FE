import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNavigation: EventEmitter<any> = new EventEmitter()
  isLoggedIn$!: Observable<boolean>;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.toggleSideNavigation.emit();
  }

}
