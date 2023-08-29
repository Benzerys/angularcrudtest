import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin, map, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class tableDataResolver implements Resolve<any>{
  constructor(
              private router : Router
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
    const params = this.router.getCurrentNavigation()?.extras.state as any
    return params
  }
}