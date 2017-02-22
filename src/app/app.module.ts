import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from './login.service';
import { StudentService } from './student.service';
import { AuthService } from './auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './home/help/help.component';
import { ChangepasswordComponent } from './home/profile/changepassword/changepassword.component';
import { DeleteprofileComponent } from './home/profile/deleteprofile/deleteprofile.component';
import { ChangeavatarComponent } from './home/profile/changeavatar/changeavatar.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'deleteprofile', component: DeleteprofileComponent },
  { path: 'changeavatar', component: ChangeavatarComponent },
  { path: '**', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HelpComponent,
    ChangepasswordComponent,
    DeleteprofileComponent,
    ChangeavatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService,
    AuthService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
