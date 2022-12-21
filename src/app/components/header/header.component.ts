import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth = JSON.parse(localStorage.getItem('auth')!).auth;
  now = new Date();

  constructor() { }

  ngOnInit(): void {
    if (this.now > JSON.parse(localStorage.getItem('auth')!).expire){
      localStorage.removeItem('auth');
      document.location.reload();
    }
    
  }
}
