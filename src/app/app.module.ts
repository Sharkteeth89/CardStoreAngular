import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {MaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material/core';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardSearchComponent } from './card-search/card-search.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { RoleCheckboxComponent } from './role-checkbox/role-checkbox.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { CreateNewCardComponent } from './create-new-card/create-new-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CardSearchComponent,   
    RegisterUsersComponent,
    RoleCheckboxComponent,
    DropdownComponent,
    LoginComponent,
    CreateNewCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
