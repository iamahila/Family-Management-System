import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Members } from '../models/Members'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api/api.service';


@Injectable()
export class UserResolver implements Resolve<Members>{

    constructor(private apiService: ApiService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Members | Promise<Members> | Observable<Members>{
        let id = 1;//route.params['id'];
        return this.apiService.getUser(id);
    }

}