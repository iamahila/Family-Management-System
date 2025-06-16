import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], filterString: string): User[] {
      let user: User[] = [];
      user = value.filter(data => data.name?.includes(filterString));
      return user;          
  }
}