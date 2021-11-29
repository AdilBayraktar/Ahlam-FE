import { Component, OnInit } from '@angular/core';
import { Purchases } from '../models/purchases.model';
import { PurchaseService } from '../services/purchase/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  p = 1;
  purchases: any

  constructor(private service: PurchaseService) {}

  ngOnInit(): void {
    this.purchases = this.service.getAllPackages();
  }


}
