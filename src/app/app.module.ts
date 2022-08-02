import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductcategorylistComponent } from './components/productcategorylist/productcategorylist.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductcategoryComponent } from './components/productcategory/productcategory.component';
import { FormsModule } from '@angular/forms';
import { MerchantComponent } from './components/merchant/merchant.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { CartComponent } from './components/cart/cart.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
const routes:Routes=[
{path:"",component:HomeComponent},
{path:"buyer", component:BuyerComponent},
{path:"merchant",component:MerchantComponent},
{path:"productlist", component:ProductlistComponent},
{path:"categorylist", component:ProductcategorylistComponent},
{path:"addProduct", component:AddProductComponent},
{path:"addCategory", component:ProductcategoryComponent},
{path:"cart", component:CartComponent},
{path:"update/:proId" ,component:AddProductComponent},
{path:"delete/:id", component:ProductlistComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductcategorylistComponent,
    HomeComponent,
    AddProductComponent,
    ProductcategoryComponent,
    MerchantComponent,
    BuyerComponent,
    CartComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
