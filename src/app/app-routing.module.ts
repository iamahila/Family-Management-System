import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ExpenseComponent } from './expense/expense.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'user', component: UsersComponent},
  {path:'expense', component: ExpenseComponent},
  {path:'chart', component: ChartComponent},
  {path:'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
