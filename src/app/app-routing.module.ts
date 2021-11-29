import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamsComponent } from './dreams/dreams.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: StatisticsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'dreams', component: DreamsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'purchases', component: PurchasesComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
