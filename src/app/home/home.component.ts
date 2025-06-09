import { Component, OnInit } from '@angular/core';
import { Members } from '../models/Members';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  familyMembers: Members[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.familyMembers = this.apiService.getMembers();
  }

}
