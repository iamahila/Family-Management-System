import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @ViewChild('form') submitForm!: NgForm;
  @ViewChild('email') email!: ElementRef;

  ngOnInit(): void{
    console.log(this.email);
  }

  onSubmit(){
    console.log('value is: ', this.submitForm);
  }
}
