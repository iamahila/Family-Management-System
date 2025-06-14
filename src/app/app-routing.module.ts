import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ExpenseComponent } from './expense/expense.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/guards/auth.guard';
import { SaveDeactivateGuard } from './services/guards/save.guard';
import { UserResolver } from './resolver/userResolver.service';
import { ReactiveFormComponent } from './services/reactive-form/reactive-form.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {
    path:'user', 
    canActivate: [AuthGuard],
    component: UsersComponent
  },
  {path:'expense', component: ExpenseComponent, canDeactivate:[SaveDeactivateGuard], resolve: {UserResolver}},
  {path:'chart', component: ChartComponent},
  {path:'reactiveForm', component: ReactiveFormComponent},
  {path:'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
]
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
