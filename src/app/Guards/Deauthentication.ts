import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StudentappComponent } from '../student/studentapp.component';
import { Observable } from 'rxjs/Observable';

export class Deauthentication implements CanDeactivate<StudentappComponent> {
    canDeactivate(component: StudentappComponent,
         currentRoute: ActivatedRouteSnapshot,
         currentState: RouterStateSnapshot,
         nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // throw new Error('Method not implemented.');
        return confirm('Do you want to proceed to next page');
    }
}
