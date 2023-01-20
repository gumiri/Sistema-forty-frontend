import { Component, OnInit } from '@angular/core';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth = JSON.parse(localStorage.getItem('auth')!).auth;
  now = new Date();

  constructor(private navigationService : NavigationService) { }

  ngOnInit(): void {
    if (this.now > JSON.parse(localStorage.getItem('auth')!).expire){
      localStorage.removeItem('auth');
      document.location.reload();
    }
  }
  sair(){
    localStorage.removeItem('auth');
    document.location.reload();
  }
}
