import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  now = new Date();

  constructor() { }

  ngOnInit(): void {
    if (this.now > JSON.parse(localStorage.getItem('auth')!).expire){
      localStorage.removeItem('auth');
      document.location.reload();
    }
  }

}
