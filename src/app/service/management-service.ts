import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable,map } from "rxjs";
import { Employee } from "../common/employee";
import { Injectable } from "@angular/core";
import { Department } from "../common/department";
@Injectable({
    providedIn:'root'
})

export class ManagementService {

    private empUrl ="http://localhost:8080/api/emp"
     deptUrl ="http://localhost:8080/api/dept"
     
    constructor(private httpClient: HttpClient){}

    getAllEmployees() :Observable<Employee[]>{
        return this.httpClient.get<getEmployeeDetails>(this.empUrl).pipe(map(data=>data._embedded.employees));
    }

    getAllDepartments() :Observable<Department[]>{
        return this.httpClient.get<getDepartments>(this.deptUrl).pipe(map(data1=>data1._embedded.departments))
    }
    saveEmployee(employee:Employee):Observable<Employee>{
        console.log(employee)

        const httOptions={
            headers:new HttpHeaders({
                'Content-type':'application/json',
                'Authorization':'auth-token',
                'Access-Control-Allow-Origin':'*'
            })
        };
        return this.httpClient.post<Employee>(this.empUrl,employee,httOptions)
    }

    saveCategory(department:Department):Observable<Department>{
        console.log(department);

        const httOptions={
            headers:new HttpHeaders({
                'Content-type':'application/json',
                'Authorization':'auth-token',
                'Access-Control-Allow-Origin':'*'
            })
        };

        return this.httpClient.post<Department>(this.deptUrl,department,httOptions);

    }

    getEmployeeByName(empName : string):Observable<Employee[]>{
        const empByNameURL = "http://localhost:8080/api/emp/search/findByEmpNameContainsIgnoreCase/?EmpName=" + empName
        return this.httpClient.get<getEmployeeDetails>(empByNameURL).pipe(map(response => response._embedded.employees))
      }
    
      getEmployeeById(empID : number):Observable<Employee>{
        const empIDURL = "http://localhost:8080/api/emp/"+empID
        return this.httpClient.get<Employee>(empIDURL);
      }
    
      updateEmployee(employee : Employee):Observable<Employee>{
        console.log(employee)
    
        const httpOptions = {
          headers: new HttpHeaders({
            'content-type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-origin' : '*'
          })
        };
        return this.httpClient.put<Employee>(this.empUrl+`/${employee.empNo}`,employee,httpOptions)
      }


      deleteEmployee(empNo :number): Observable<Employee>{

        const httpOptions = {
          headers: new HttpHeaders({
            'content-type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-origin' : '*'
          })
        };
        return this.httpClient.delete<Employee>(this.empUrl+`/${empNo}`,httpOptions);
      }
       
    

}
   
interface getEmployeeDetails{
    _embedded :{
        employees:Employee[]
    }
}
interface getDepartments{
    _embedded :{
        departments:Department[]
    }
}

