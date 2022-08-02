import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { MgmtServiceService } from 'src/app/service/mgmt-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories:ProductCategory[]
  products:Product[]

  formModel:Product= new Product(0,"","","",0,"",false,0,new Date,new Date,0)
  isEditable=false;

  constructor(private route:Router,
              private service:MgmtServiceService,
              private activateRoute:ActivatedRoute) { }
  

  
  ngOnInit(): void {
    // this.onSubmit();
    
    this.activateRoute.paramMap.subscribe(()=>{this.getproductById()})
  }
  getproductById(){
    const proId = +this.activateRoute.snapshot.paramMap.get("proId");
    console.log(proId);

    if(proId>0){
      this.isEditable=true;
      this.service.getprodByID(proId).subscribe((data=>{
        this.formModel=data;
      }))

    }
  }
  // this.service.saveCategory(this.formModel).subscribe(()=>{
  //   this.route.navigateByUrl("/categorylist")

  listOfCategories(){
    this.service.getAllCategory().subscribe(data=>{
      console.log(data)
      this.categories = data
    })
  }



  onSubmit(){
    //console.log(this.formModel)
    if(this.isEditable){
      this.service.updateProduct(this.formModel).subscribe(()=>{
        this.route.navigateByUrl("/productlist")  
      })
    }else{
    this.service.saveProduct(this.formModel).subscribe(()=>{
    this.route.navigateByUrl("/productlist")
  })
  }}

}
