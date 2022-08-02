import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { EmplistComponent } from './components/emplist/emplist.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DepartmentlistComponent } from './components/departmentlist/departmentlist.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { AddDepartmentsComponent } from './components/add-departments/add-departments.component';
const routes :Routes=[
  {path:'',component:WelcomeComponent},
  {path:'employees',component:EmplistComponent},
  {path:'departments',component:DepartmentlistComponent},
  {path:'addEmployees', component:AddEmployeeComponent},
  {path:'addCategory', component:AddDepartmentsComponent}
]

@NgModule({ 
  declarations: [
    AppComponent,
    EmplistComponent,
    WelcomeComponent,
    DepartmentlistComponent,
    AddEmployeeComponent,
    AddDepartmentsComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
