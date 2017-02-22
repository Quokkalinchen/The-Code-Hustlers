import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { StudentService } from '../student.service';
import { CompetencesService } from '../competences.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StudentService]
})
export class HomeComponent implements OnInit {
  private studentData = "";
  private school = "";
  private studyGroups = "";
  private avatar = "";
  private chapters = "";
  private educationalPlan = "";

  constructor(private loginService: LoginService, private studentService: StudentService, private competencesService: CompetencesService) { }

  ngOnInit() {
    this.studentService.getStudentData().subscribe(
     data => {
       this.school = data.school;
       this.studyGroups = data.studyGroups;
       this.studentData = data;
       this.studentService.getAvatar(data._id).subscribe(
        data => {
          this.avatar = data;
        }
       );
     }
    );

    this.competencesService.getChapters().subscribe(
     data => {
       this.chapters = data;
     }
    );

    this.competencesService.getEducationalPlan().subscribe(
     data => {
       this.educationalPlan = data;
     }
    );



  }



  logout(){

    this.loginService.logout();
  }

}
