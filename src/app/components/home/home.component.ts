import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  now = new Date();

  constructor(private navigationService : NavigationService) { }

  ngOnInit(): void {
    if (this.now > JSON.parse(localStorage.getItem('auth')!).expire){
      localStorage.removeItem('auth');
      document.location.reload();
    }
  }

}
