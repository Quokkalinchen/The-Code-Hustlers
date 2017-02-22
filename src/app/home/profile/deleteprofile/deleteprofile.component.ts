import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../../student.service';

@Component({
  selector: 'app-deleteprofile',
  templateUrl: './deleteprofile.component.html',
  styleUrls: ['./deleteprofile.component.css']
})
export class DeleteprofileComponent implements OnInit {
  deleteProfileForm: FormGroup;
  private response = "";
  private password = "";

  constructor(private studentService: StudentService) {


  }

  ngOnInit() {
    this.deleteProfileForm = new FormGroup({
      password: new FormControl('', []),
    });
  }

  deleteProfile(){
    this.password = this.deleteProfileForm.value.password;

    alert(this.password);

  }

}
