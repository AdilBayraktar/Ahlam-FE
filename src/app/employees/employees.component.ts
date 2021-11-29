import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeServiceService } from '../services/employee/employee-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class EmployeesComponent implements OnInit {
  employee: Employee[] = [];
  p = 1;
  constructor(
    public employeeService: EmployeeServiceService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getAllEmployees();
    this.addNewEmployee();
  }

  getAllEmployees() {
    this.employee = this.employeeService.getAllEmployees();
  }

  addNewEmployee() {
    this.employeeService.employee = {
      employeeName: '',
      doneDreamsNumber: 0,
      inProgressDreamsNumber: 0,
      userName: '',
      email: '',
      password: '',
      coniformPassword: '',
      averageTime: 0,
      pictureId: '1',
      availableBalance: 0,
      transferredBalance: 0,
    };
  }

  open(content: any) {
    this.modalService.open(content);
  }

  submit() {
    this.employeeService.addNewEmployee()
  }
}
