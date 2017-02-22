import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../../student.service';



@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  private response = "";
  private passwordOld = "";
  private passwordNew = "";
  private passwordRepeat = "";

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      passwordOld: new FormControl('', []),
      passwordNew: new FormControl('', []),
      passwordRepeat: new FormControl('', []),
    });

  }

  changePassword(){
   this.passwordOld = this.changePasswordForm.value.passwordOld;
   this.passwordNew = this.changePasswordForm.value.passwordNew;
   this.passwordRepeat = this.changePasswordForm.value.passwordRepeat;


   if(this.passwordNew == this.passwordRepeat){
     this.studentService.changePasword(this.passwordOld,this.passwordNew).subscribe(
      data => {
        alert("Passwort wurde geändert");
        this.response = data;
      }
     );;
   }else{
     alert("Die eingegebenen Kennwörter stimmen nicht überein");
   }

  }

}
