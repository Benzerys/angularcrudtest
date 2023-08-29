import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeData } from './employee-data';
import { EmployeeDataService } from '../service/employee-data.service';
import { TableDataService } from './table-data.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  empForm!: FormGroup;

  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'education',
    'action',
  ];

  dataSource: MatTableDataSource<EmployeeData> =
    new MatTableDataSource<EmployeeData>([]);

  constructor(
    private fb: FormBuilder,
    private sv: EmployeeDataService,
    private tableDataService: TableDataService
  ) {
    this.empForm = this.fb.group({
      firstname: [null],
      lastname: [null],
      email: [null],
      gender: [null],
      education: [null],
    }); //
  }

  ngOnInit(): void {
    this.sv.employeeData$.subscribe((data) => {
      this.dataSource.data = data

    });
  }

  
  onDelete = (index: number) => {
   this.sv.employeeData.splice(index,1)
   this.dataSource.data = this.sv.employeeData
  }

}
