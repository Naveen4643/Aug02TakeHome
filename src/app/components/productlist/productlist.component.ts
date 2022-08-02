import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { MgmtServiceService } from 'src/app/service/mgmt-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

   products: Product[] 
   searchByName :string
   product:Product
  constructor(private service:MgmtServiceService,
              private route:Router,
              private activateRoute:ActivatedRoute) { }
               

  ngOnInit(): void {
    // this.getAllProducts();
    this.activateRoute.paramMap.subscribe(()=>{
    this.getAllProducts()})
    
  }
  sign(id:number){
     
    if(id > 0){
      this.service.getprodByID(id).subscribe(data => {this.product = data
      console.log(data)
      })
    }
  }
  
  getAllProducts(){
    this.service.getAllProducts().subscribe(data=>{console.log(data);
    this.products=data;
  })
}  


  addProduct(){
    this.route.navigateByUrl("/addProduct")
  }

  updatePro(proId:number){
    this.route.navigateByUrl("/update/"+proId)
  }

  // deletePro()
  deleteProduct(id:number){
    if(confirm("Do you want to delete product with id "+id+"?")){
      this.service.deleteProductById(id).subscribe(()=>{
        this.route.navigateByUrl("/delete/"+id)
      })
    }
  }

  getprodByName(){
    this.service.getprodByName(this.searchByName).subscribe(data=>{
      this.products=data
    })
  }


}
