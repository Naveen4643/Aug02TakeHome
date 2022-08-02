import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { ManagementService } from 'src/app/service/management-service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  departments:Department[]
  constructor(private empService:ManagementService,
              private route:Router) { }

  ngOnInit(): void {
    console.log(this.getAllDepartments())
  }


  getAllDepartments(){
    this.empService.getAllDepartments().subscribe(data1=>{console.log(data1);
    this.departments=data1;
   })
  
  }
  addCategory(){
    this.route.navigateByUrl("/addCategory")
  }
  
}