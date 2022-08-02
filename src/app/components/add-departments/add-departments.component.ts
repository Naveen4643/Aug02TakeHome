import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { ManagementService } from 'src/app/service/management-service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  departments: Department[]
  constructor(private route:Router,
              private service:ManagementService) { }
  
  formModel:Department=new Department(0,"","")
  
  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){
    console.log(this.formModel)
    this.service.saveCategory(this.formModel).subscribe(()=>{
      this.route.navigateByUrl("/departments")
    })
   
  }

}
