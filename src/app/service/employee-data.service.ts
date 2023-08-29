// employee-data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeData } from '../table-data/employee-data'; // Import the EmployeeData interface

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  public employeeData: EmployeeData[] = [];
  private _employeeData = new BehaviorSubject<EmployeeData[]>(
    this.employeeData
  );
  employeeData$ = this._employeeData.asObservable();

  constructor() {}
}
