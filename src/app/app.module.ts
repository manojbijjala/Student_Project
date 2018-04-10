import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentdataComponent } from './student/studentdata.component';
import { StudentModule } from './student/student.module';
import {FormsModule} from '@angular/forms';
import { StudentformComponent } from './student/studentform.component';
import { StudentappComponent } from './student/studentapp.component';
import { Studentservice } from './student/studentservice';
import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './student/home.component';
import { Authentication } from './Guards/Authentication';
import { Deauthentication } from './Guards/Deauthentication';
import {HttpClientModule} from '@angular/common/http';
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: StudentformComponent},
  // {path: 'itdata', component: StudentappComponent},
  {path: 'data', component: StudentappComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    StudentdataComponent,
    StudentformComponent,
    StudentappComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Studentservice, Authentication, Deauthentication],
  bootstrap: [AppComponent]
})
export class AppModule { }
