import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string | null | undefined, limit: number): any {
    
    if(!!value && value.length > limit){
        return value.substring(0, limit)+'...';
    }
    else{
      return value;
    }

  }

}
