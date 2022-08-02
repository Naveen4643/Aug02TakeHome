import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any=[]
  public grandTotal:number=0;
  constructor(private cservice:CartService) { }

  ngOnInit(): void {
    this.cservice.getProducts().subscribe(res=>{
      this.product=res;
      
    })
  }
  removeItem(item:any){
    this.cservice.removecartItem(item)
  }

}
