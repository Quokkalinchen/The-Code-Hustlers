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
  private response = "";

  constructor(private loginService: LoginService, private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentData().subscribe(
     data => {
       this.response = data;
     }
    );

  }

  logout(){
    this.loginService.logout();
  }

}
