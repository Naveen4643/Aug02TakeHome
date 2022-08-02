import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map} from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class MgmtServiceService {

  
  productUrl="http://localhost:8080/api/pro";
  categoryUrl="http://localhost:8080/api/category"

  constructor(private httpClient:HttpClient) { }
  
  getAllProducts() :Observable<Product[]>{
    return this.httpClient.get<getAllProducts>(this.productUrl).pipe(map(data=>data._embedded.product1s));
}

getAllCategory() :Observable<ProductCategory[]>{
  return this.httpClient.get<getAllCategory>(this.categoryUrl).pipe(map(data1=>data1._embedded.productCategories));
}

  saveProduct(product:Product):Observable<Product>{
    console.log(product)
    
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpClient.post<Product>(this.productUrl,product,httpOptions)
  }

  saveCategory(categories:ProductCategory):Observable<Product>{
    console.log(categories)
    
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpClient.post<Product>(this.categoryUrl,categories,httpOptions)
  }

  

  getprodByID(proId:number){
    const proIdUrl ="http://localhost:8080/api/pro/"+proId

    return this.httpClient.get<Product>(proIdUrl)
  }

  getprodByName(name: string):Observable<Product[]>{
    const prodByNameUrl="http://localhost:8080/api/pro/search/findByNameContainsIgnoreCase?name="+name;
    return this.httpClient.get<getAllProducts>(prodByNameUrl).pipe(map(data=>data._embedded.product1s));

  }


  updateProduct(product:Product):Observable<Product>{
    console.log(product)
    
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpClient.put<Product>(this.productUrl+`/${product.id}`,product,httpOptions)
}

deleteProductById(id:number){
  console.log(id)
  const httpOptions={
    headers :new HttpHeaders({
      "content-Type" : "application/json",
      "Authorization":"auth-token",
      "Access-Control-Allow-origin":"*"
    })
  }
  return this.httpClient.delete<Product>(this.productUrl+`/${id}`, httpOptions);
}

}



 interface getAllProducts{
    _embedded:{
      product1s:Product[]
    }
 }

 interface getAllCategory{
  _embedded:{
    productCategories:ProductCategory[]
  }
 }