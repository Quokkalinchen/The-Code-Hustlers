import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { StudentService } from '../student.service';



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

  constructor(private loginService: LoginService, private studentService: StudentService) { }

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



  }



  logout(){

    this.loginService.logout();
  }

}
