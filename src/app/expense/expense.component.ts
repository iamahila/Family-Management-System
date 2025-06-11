import { Component } from '@angular/core';
import { IDeactivateService } from './../services/guards/save.guard'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements IDeactivateService{

  canExit() : boolean | Promise<boolean> | Observable<boolean>{
    if(confirm('can i move to next page')){
      return true;
    }
    else{
      return false;
    }
  }

}
