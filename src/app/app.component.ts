import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcrudtest';

  displayedColumns: string[] = [
    'id', 
    'firstname', 
    'lastname', 
    'email',  
    'gender', 
    'education', 
    'action'
  ];

  dataSource!: MatTableDataSource<any>;

  constructor(
    

  ) {}

  openAddEditForm() {
    
  }

}
