import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dream } from 'src/app/models/dream.model';

@Injectable({
  providedIn: 'root'
})
export class DreamService {
  url = "http://mks2000-001-site1.etempurl.com/api/controlPanel/GetDreamsList"
  constructor(private http: HttpClient) { }
  dreams: any[] = [];
  getAllDreams(){
      this.http.get<Dream[]>(this.url).toPromise()
      .then((res) => {
        this.dreams = res;
      });
}
}
