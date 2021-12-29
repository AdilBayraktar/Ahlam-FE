import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employeeList: any[] = [];
  employee: any
  url = "http://mks2000-001-site1.etempurl.com/api/controlPanel/GetEmployeesList"
  addNewUrl = "http://mks2000-001-site1.etempurl.com/api/Account/Register"

  constructor(private http: HttpClient) { }

  getAllEmployees(){

      this.http.get<Employee[]>(this.url).toPromise()
      .then((res) => {
        this.employeeList = res
      });
  }

  addNewEmployee(data: any){
    return this.http.post(this.addNewUrl, data)
  }
}
