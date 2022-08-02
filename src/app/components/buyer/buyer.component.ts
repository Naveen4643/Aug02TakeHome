import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/service/cart.service';
import { MgmtServiceService } from 'src/app/service/mgmt-service.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  products: Product[] 

  constructor(private service:MgmtServiceService,
              private route:Router,
              private cservice:CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  
  getAllProducts(){
    this.service.getAllProducts().subscribe(data=>{console.log(data);
    this.products=data;
  })
}  
add(e:any){

  this.cservice.addtoCart(e)
  this.route.navigateByUrl("/cart")
  
  }

}
