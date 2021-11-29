import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers(){
    let list: User[] = []

    for(let i = 0 ; i < 100 ; i++){
      list.push({phoneNumber: "+966123123123",
        dream: "اختبار حلم",
        paidPrice: 225})
    }
    return list
  }
}
