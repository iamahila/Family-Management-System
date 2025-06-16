import { Injectable, resolveForwardRef } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Members } from 'src/app/models/Members';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getMembers() : Members[]{
    return [
      {firstName: 'Ahila', lastName: 'Chokkalingam', age:30, designation:'Senior Software Engineer', dob:'26-05-1995', maritalStatus:'Married', qualification:'BE'},
      {firstName: 'Karthick', lastName: 'Nedunchelian', age:35, designation:'Happy Husband', dob:'17-01-1990', maritalStatus:'Married', qualification:'BE'},
      {firstName: 'Nila', lastName: 'Karthick', age:2, designation:'Fun Lover', dob:'13-03-2023', maritalStatus:'Happily Single', qualification:'Yet to decide'},
      {firstName: 'Nilan', lastName: 'Karthick', age:-0, designation:'Yet to identify', dob:'NA', maritalStatus:'NA', qualification:'NA'}
    ]
  }

  getUser(id: number): Members{
    if(id === 1){
      return {firstName: 'Ahila', lastName: 'Chokkalingam', age:30, designation:'Senior Software Engineer', dob:'26-05-1995', maritalStatus:'Married', qualification:'BE'};
    }
    else{
      return {firstName: 'Karthick', lastName: 'Nedunchelian', age:35, designation:'Happy Husband', dob:'17-01-1990', maritalStatus:'Married', qualification:'BE'};
    }
  }

  getEmail(email: string): Observable<string[]> {
    let observer1 = new Observable<string[]>(observer =>{
      const availableEmails = ['aaa@gmail.com', 'ahila@gmail.com'];
      if(availableEmails.includes(email)){
        observer.next(availableEmails);
      }
      observer.error('Empty values');
    });

    return observer1;
  }

}
