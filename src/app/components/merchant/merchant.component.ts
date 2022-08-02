import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  productList(){
      this.route.navigateByUrl("/productlist")
  }
  categoryList(){
    this.route.navigateByUrl("/categorylist")

  }
}
