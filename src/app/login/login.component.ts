import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private response = "";
  private username = "";
  private password = "";

  constructor(private loginService: LoginService) {    }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', []),
    });
  }


  login(){

   this.username = this.loginForm.value.username;
   this.password = this.loginForm.value.password;
   this.loginService.login(this.username,this.password).subscribe(
    data => {
      this.response = data;
    }
   );
  }

  logout(){
    this.loginService.logout();
  }


}
