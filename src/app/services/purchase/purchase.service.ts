import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchases } from 'src/app/models/purchases.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  url = "http://mks2000-001-site1.etempurl.com/odata/ServicePaths"
  // addingUrl = "http://mks2000-001-site1.etempurl.com/odata/ServicePaths"
  purchases: any[] = [];
  package: any
  constructor(private http: HttpClient) {}

  getAllPackages() {
    this.http.get<Purchases>(this.url).toPromise()
    .then((res) => {
      this.purchases = res.value
    });

    // let list: Purchases[] = [];

    // for (let i = 0; i < 100; i++) {
    //   list.push({
    //     numberOfEmployees: 15,
    //     packagePrice: 60,
    //     inProgressDreamsNumber: 8,
    //     purchasesNumber: 43,
    //   });
    // }
    // return list
  }

  addNewPackage(data: any){
    return this.http.post(this.url, data)
  }
  // updatePackage(data: any){
  //   return this.http.put(this.url, data)
  // }
}
