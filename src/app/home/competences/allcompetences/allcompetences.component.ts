import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../../../competences.service';


@Component({
  selector: 'app-allcompetences',
  templateUrl: './allcompetences.component.html',
  styleUrls: ['./allcompetences.component.css']
})
export class AllcompetencesComponent implements OnInit {
  private allStudentCompetences = "";

  constructor(private competencesService: CompetencesService) { }

  ngOnInit() {

    this.competencesService.getAllStudentCompetences(1).subscribe(
     data => {
       this.allStudentCompetences = data;
     }
    );
  }

}
