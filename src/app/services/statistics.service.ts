import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistics } from '../models/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  PurchasesBalance: any
  numberOfActiveDreams: any
  numberOfDoneDreams: any
  url = "http://mks2000-001-site1.etempurl.com/api/controlPanel/GetStatistics"

  constructor(private http: HttpClient) { }
  getAllStatistics(){

    this.http.get<Statistics>(this.url).subscribe(
      data=>{
        this.PurchasesBalance = data.PurchasesBalance
        this.numberOfActiveDreams = data.numberOfActiveDreams
        this.numberOfDoneDreams = data.numberOfDoneDreams
      }
    )

}

// getPurchasesBalance(){

//   this.http.get<Statistics>(this.url).toPromise()
//   .then((res) => {
//     this.PurchasesBalance = res.PurchasesBalance
//     console.log(res)
//   });
// }
// getNumberOfActiveDreams(){

//   this.http.get<Statistics>(this.url).toPromise()
//   .then((res) => {
//     this.numberOfActiveDreams = res.numberOfActiveDreams
//     console.log(res)
//   });
// }
// getNumberOfDoneDreams(){

//   this.http.get<Statistics>(this.url).toPromise()
//   .then((res) => {
//     this.numberOfDoneDreams = res.numberOfDoneDreams
//     console.log(res)
//   });
// }
}
