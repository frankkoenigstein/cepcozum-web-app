import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhoneSelectedGuardService implements CanActivate {
  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.dataService.repairRequest.phoneOption) {
      return true;
    }
    else {
      this.router.navigate(["/phone"]);

      return false;
    }
  }
}
