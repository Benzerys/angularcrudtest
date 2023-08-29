import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAddComponent } from './edit-add/edit-add.component';
import { TableDataComponent } from './table-data/table-data.component';
import { tableDataResolver } from './table-data/table-data.resolver';


const routes: Routes = [
  {
    path: '',
    component:TableDataComponent
  },
  {
    path: 'EditAddComponent',
    component:EditAddComponent,
    resolve: {home: tableDataResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
