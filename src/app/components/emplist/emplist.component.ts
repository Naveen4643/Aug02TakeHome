import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../common/department';
import { Employee } from '../../common/employee';
import { ManagementService } from '../../service/management-service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  employees : Employee[]
  searchByName : string
 
  constructor(private service : ManagementService,private route:Router,private activeRoute:ActivatedRoute) { }
  formModel : Employee = new Employee(0,"","",new Date(),0,0,0,0);
  


  ngOnInit(): void {
    this.listOfEmployees()
    this.activeRoute.paramMap.subscribe(() =>{
      this.listOfEmployees()});
  }

  addEmployee(){
    this.route.navigateByUrl("/addEmployees");
  }

  

   listOfEmployees(){
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data); 
      this.employees = data;
    })
   }

   updateEmp(empNo:number){
    this.route.navigateByUrl("/update/"+empNo)
   }

   getEmployeeByName(){
      this.service.getEmployeeByName(this.searchByName).subscribe(data =>{
        this.employees = data
      })
   }
   deleteEmp(empNo:number){
    if(confirm("Do you want to delete")){
      this.service.deleteEmployee(empNo).subscribe(data => {
        console.log(data)
        this.listOfEmployees();
       // this.route.navigateByUrl("/employees")
      });
    }
   }
              
            
                backtoHome(){
                  this.route.navigateByUrl("/")
                }
            
                
            
            }