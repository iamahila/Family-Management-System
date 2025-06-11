import { Component, OnInit } from '@angular/core';
import { IDeactivateService } from './../services/guards/save.guard'
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Members } from '../models/Members';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, IDeactivateService{

  user!: Members;
  customObservable!: Subscription;
  intervalSubscription!: Subscription;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['UserResolver'];
    });

    let intervalObservable = new Observable<number>(observer =>{
        let count = 0;
        let intervalID = setInterval(() => {
          observer.next(count);
          count++;
          if(count > 3){
            observer.error('count greater than 3');
          }
          if(count > 2){
            observer.complete();
          }
        }, 1000);
    });


    this.intervalSubscription = intervalObservable.subscribe(data => {
        console.log(data);
    }, error => {console.log('Error occured: ', error)}, ()=>{console.log('completed')});
  }

  ngOnDestroy(): void{
    this.intervalSubscription.unsubscribe();
  }

  canExit() : boolean | Promise<boolean> | Observable<boolean>{
    if(confirm('can i move to next page')){
      return true;
    }
    else{
      return false;
    }
  }

  




}
