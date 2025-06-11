import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateService{
    canExit: () => boolean | Promise<boolean> | Observable<boolean>
}

export class SaveDeactivateGuard implements CanDeactivate<IDeactivateService>{

    canDeactivate(component: IDeactivateService, route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return component.canExit();
    }

}