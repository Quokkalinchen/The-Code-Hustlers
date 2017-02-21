import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  loginForm: FormGroup;
  private response = "";
  private passwordOld = "";
  private passwordNew = "";
  private passwordRepeat = "";

  constructor() { }

  ngOnInit() {


  }

  changePassword(){

   alert("change password");
  }

}
