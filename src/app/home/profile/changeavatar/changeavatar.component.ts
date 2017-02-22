import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../../student.service';

@Component({
  selector: 'app-changeavatar',
  templateUrl: './changeavatar.component.html',
  styleUrls: ['./changeavatar.component.css']
})
export class ChangeavatarComponent implements OnInit {
  private avatars = "";
  private response = "";

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAllAvatars().subscribe(
     data => {
       this.avatars = data;
     }
    );
  }

  changeAvatar(avatarId){
    this.studentService.changeAvatar(avatarId).subscribe(
     data => {
       alert("Avatar wurde geändert");
       this.response = data;
     }
    );;

  }

}
