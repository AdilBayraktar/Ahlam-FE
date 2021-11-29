import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employeeList: Employee[] = []
  employee!: Employee

  constructor() { }

  getAllEmployees(){

    for(let i = 0 ; i < 100 ; i++ ){
      this.employeeList.push({employeeName: 'Ahmed' , doneDreamsNumber: 15, email: "test@gmail.com" , inProgressDreamsNumber: 8, userName: 'Ahmed1997', password: '123456', coniformPassword: "123456" , averageTime: 60 , availableBalance: 285, transferredBalance: 815 })
    }
    return this.employeeList;
  }

  addNewEmployee(){
    return this.employeeList.push(this.employee)
  }
}
