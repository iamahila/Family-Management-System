import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private route: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    //    if(this.authService.isAuthenticated()){
    //         return true;
    //    }
    //    else{
    //         this.route.navigate(['/not-found']);
    //         return false;
    //    }

        return this.authService.isAuthenticated().then(data =>{
            if(data){
                return true;
            }
            else{
                this.route.navigate(['/not-found']);
                return false;
            }
        });

    }

}