import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare var require: any;


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  sendNotificationToAllUsers(){
    const Swal = require("sweetalert2")
    Swal.fire({
      title: 'أرسل إشعار جماعي للمستخدمبن',
      input: 'text',
      customClass: {
        validationMessage: 'my-validation-message'
      },
      preConfirm: (value: any) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> يرجى إدخال نص'
          )
        }
      }
    })
  }

  sendNotificationToAllEmployees(){
    const Swal = require("sweetalert2")
    Swal.fire({
      title: 'أرسل إشعار جماعي للموظفين',
      input: 'text',
      customClass: {
        validationMessage: 'my-validation-message'
      },
      preConfirm: (value: any) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> يرجى إدخال نص'
          )
        }
      }
    })
  }

}
