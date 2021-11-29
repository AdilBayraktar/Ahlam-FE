import { Injectable } from '@angular/core';
import { Dream } from 'src/app/models/dream.model';

@Injectable({
  providedIn: 'root'
})
export class DreamService {

  constructor() { }

  getAllDreams(){
    let list: Dream[] = []

    for(let i = 0; i< 100; i++){
      list.push({employeeName: "Ahmed", dreamUrl: "https/testUrl.com", tafsirHour: 5, tafsirDate: "15/12/2020", tafsirDuration : 15})
    }
    return list
  }
}
