import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit{

  users!: User[];
  filteredString = '';

  ngOnInit(): void {
    this.users = [
    {
      name: 'Ahila',
      joinedDate: new Date("12/12/2025")
    },
    {
      name: 'Karthick',
      joinedDate: new Date("10/12/2023")
    },
    {
      name: 'Nila',
      joinedDate: new Date("8/12/2020")
    },
    {
      name: 'Nilan',
      joinedDate: new Date("12/12/2030")
    },
  ]
  }

}
