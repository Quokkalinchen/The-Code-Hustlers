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

  constructor(private loginService: LoginService, private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentData().subscribe(
     data => {
       this.studentData = data;
     }
    );



  }

  dump(){

        console.log(this.studentData);
  }
  logout(){

    this.loginService.logout();
  }

}
