import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {

  category:ProductCategory[]
  constructor(private route:Router) { }

  cat : ProductCategory =new ProductCategory(0,"")
  ngOnInit(): void {
    this.onSubmit()
  }
   
  onSubmit(){
    console.log(this.cat)
    this.route.navigateByUrl("/addCategory")
  }
}
