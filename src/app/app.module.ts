import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ExpenseComponent } from './expense/expense.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/guards/auth.guard';
import { SaveDeactivateGuard } from './services/guards/save.guard';
import { UserResolver } from './resolver/userResolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './services/reactive-form/reactive-form.component';
import { FilterPipeComponent } from './services/filter-pipe/filter-pipe.component';
import { CustomPipe } from './services/custom.pipe';
import { FilterPipe } from './services/filter.pipe';
import { HttpComponent } from './services/http/http.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorImpl } from './services/api/http.interceptor';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ExpenseComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    FilterPipeComponent,
    CustomPipe,
    FilterPipe,
    HttpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, SaveDeactivateGuard, UserResolver, 
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorImpl, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
