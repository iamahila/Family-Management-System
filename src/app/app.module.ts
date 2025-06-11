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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ExpenseComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, SaveDeactivateGuard, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
