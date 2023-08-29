// table-data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  public _employeeData = new BehaviorSubject<any[]>([]);
  employeeData$ = this._employeeData.asObservable();
 

  constructor() {}

  updateEmployeeData(data: any[]) {
    this._employeeData.next(data);
  }

  
}
