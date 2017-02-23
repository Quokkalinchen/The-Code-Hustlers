import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from './login.service';
import { StudentService } from './student.service';
import { CompetencesService } from './competences.service';
import { AuthService } from './auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrderBy } from './orderby.pipe';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './home/help/help.component';
import { ChangepasswordComponent } from './home/profile/changepassword/changepassword.component';
import { DeleteprofileComponent } from './home/profile/deleteprofile/deleteprofile.component';
import { ChangeavatarComponent } from './home/profile/changeavatar/changeavatar.component';
import { AllcompetencesComponent } from './home/competences/allcompetences/allcompetences.component';
import { AchievedcompetencesComponent } from './home/competences/achievedcompetences/achievedcompetences.component';
import { AllachievedcompetencesComponent } from './home/competences/allachievedcompetences/allachievedcompetences.component';
import { EducationalplanComponent } from './educationalplan/educationalplan.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'deleteprofile', component: DeleteprofileComponent },
  { path: 'changeavatar', component: ChangeavatarComponent },
  { path: 'allcompetences/:id', component: AllcompetencesComponent },
  { path: 'achievedcompetences', component: AllachievedcompetencesComponent },
  { path: 'achievedcompetences/:id', component: AchievedcompetencesComponent },
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
    ChangeavatarComponent,
    AllcompetencesComponent,
    AchievedcompetencesComponent,
    AllachievedcompetencesComponent,
    OrderBy,
    EducationalplanComponent

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
    StudentService,
    CompetencesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
