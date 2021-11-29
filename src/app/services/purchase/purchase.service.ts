import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchases } from 'src/app/models/purchases.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  url = "http://mks2000-001-site1.etempurl.com/odata/ServicePaths?$inlinecount=allpages&$top=10&$skip=0&$orderby=Price%20&$filter=Enabled%20eq%20true"
  purchases: Purchases[] = [];
  constructor(private http: HttpClient) {}

  getAllPackages() {
    this.http.get(this.url).toPromise()
    .then((res) => {
      this.purchases = res as Purchases[];
      console.log(res)
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

  addNewPackage(){}
}
