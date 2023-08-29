import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeDataService } from '../service/employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeData } from '../table-data/employee-data';
import { TableDataService } from '../table-data/table-data.service';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.css'],
})
export class EditAddComponent implements OnInit{
  private nextId = 1;
  empForm: FormGroup;
  read: boolean = false;
  index !: number 
  education: string[] = [
    'Massachusetts Institute of Technology (MIT) ',
    'University of Cambridge',
    'University of Oxford',
    'Harvard University',
    'Stanford University',
  ];

  constructor(
    private fb: FormBuilder,
    private sv: EmployeeDataService,
    private router: Router,
    private idGeneratorService: TableDataService,
    private route : ActivatedRoute
  ) {
    this.empForm = this.fb.group({
      id:'',
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      education: '',
    });
  }

ngOnInit(): void {
this.route.data.subscribe((res:any) => {
  if(res.home?.datauser != undefined) { // Optional chaining (?.) //
    this.empForm.patchValue(res.home.datauser)
    this.read = true
    this.index = res.home.index
  }
})

}

  onSave() {
    if (this.empForm.invalid) {
      return;
    }
    if(this.read){
      this.sv.employeeData[this.index] = this.empForm.getRawValue()
    } else{
      let data = this.empForm.getRawValue()
      let id:number = 0;  
      this.sv.employeeData.map(m => id = Math.max(m.id))
      if(id == 0) data.id = 1
      else data.id = id + 1
      this.sv.employeeData.push(data)
    }
    this.empForm.reset()
      this.router.navigate(['']);
  }
}
