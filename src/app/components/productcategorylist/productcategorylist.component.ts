import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { MgmtServiceService } from 'src/app/service/mgmt-service.service';

@Component({
  selector: 'app-productcategorylist',
  templateUrl: './productcategorylist.component.html',
  styleUrls: ['./productcategorylist.component.css']
})
export class ProductcategorylistComponent implements OnInit {

  categories : ProductCategory[]
  constructor(private service:MgmtServiceService,
    private route:Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

    getAllCategories(){
      this.service.getAllCategory().subscribe(data1=>{
        this.categories=data1;
      })

      
    }
    addCategory(){
      this.route.navigateByUrl("/addCategory")
    }

}
