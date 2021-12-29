import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Purchases } from '../models/purchases.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseService } from '../services/purchase/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  p = 1;
  NumberOfInterpreters = null
  Price= null
  Enabled= true
  isCreated: boolean = false
      // purchasesNumber= null
      // CreationDate= Date.now()
      // LastModificationDate= Date.now()
      // CreatorId= null
      // ModifierId= null
      // AttachmentId= null
      // CreatorName= null
  // purchases: any

  constructor(public service: PurchaseService, private modalService: NgbModal) {}

  ngOnInit(): void {
    // this.service.package ={
    //   NumberOfInterpreters: null,
    //   Price: null,
    //   Enabled: true,
    //   purchasesNumber: null,
    //   CreationDate: Date.now(),
    //   LastModificationDate: Date.now(),
    //   CreatorId: null,
    //   ModifierId: null,
    //   AttachmentId: null,
    //   CreatorName: null
    // }

    this.service.getAllPackages();
  }
  open(content: any) {
    this.modalService.open(content);
  }

  form = new FormGroup({
    NumberOfInterpreters: new FormControl(null, [Validators.required]),
      Price: new FormControl(null, [Validators.required]),
      Enabled: new FormControl(true),
  })
  editForm = new FormGroup({
      e_NumberOfInterpreters: new FormControl(null, [Validators.required]),
      e_Price: new FormControl(null, [Validators.required]),
      e_Enabled: new FormControl(true),
  })


  addNewPurchase(){

      let purchaseModel = Object.assign({},this.form.value)
      this.service.addNewPackage(purchaseModel).subscribe(res=>{
        this.service.getAllPackages()
        this.isCreated = true
        // console.log(purchaseModel)
      },err=>{
        err = console.log(err)
      })
  }

//   editPurchase(){
//     const body: any = {
//       NumberOfInterpreters: this.editForm.controls.e_NumberOfInterpreters.value,
//       Price: this.editForm.controls.e_Price.value,
//       Enabled: this.editForm.controls.e_Enabled.value,
//   }
//   this.service.updatePackage(body).subscribe(res=>{

//   })
// }

  // submit(){
  //   // const data ={
  //   //   NumberOfInterpreters: this.NumberOfInterpreters,
  //   //   Price: this.Price,
  //   //   Enabled: this.Enabled,
  //     // purchasesNumber: this.purchasesNumber,
  //     // CreationDate: this.CreationDate,
  //     // LastModificationDate: this.LastModificationDate,
  //     // CreatorId: this.CreatorId,
  //     // ModifierId: this.ModifierId,
  //     // AttachmentId: this.AttachmentId,
  //     // CreatorName: this.CreatorName
  //   }
  //   this.service.addNewPackage(data).subscribe(res=>{
  //     this.service.getAllPackages()
  //   },
  //   err=>{
  //     console.log(err)
  //   })
  // }


}
