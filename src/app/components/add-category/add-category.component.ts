import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { MgmtServiceService } from 'src/app/service/mgmt-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categories:ProductCategory[]
  constructor(private route:Router,
    private service:MgmtServiceService) { }

    formModel:ProductCategory = new ProductCategory(0,"")
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formModel)
    this.service.saveCategory(this.formModel).subscribe(()=>{
      this.route.navigateByUrl("/categorylist")
    })
   
  }

}
