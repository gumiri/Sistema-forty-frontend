import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  constructor(private navigationService : NavigationService) { }

  ngOnInit(): void {
  }

}
