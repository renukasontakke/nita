import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Router}from'@angular/router';
import{FormsModule}from'@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { DataService } from './data.service';
import { AddComponent } from './add/add.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent },
      {path:'add',component:AddComponent}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
