import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../../../competences.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-educationalplan',
  templateUrl: './educationalplan.component.html',
  styleUrls: ['./educationalplan.component.css']
})
export class EducationalplanComponent implements OnInit {
  private educationalPlanCompetences = "";
  private educationalPlanId: number;

  constructor(private competencesService: CompetencesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
        this.educationalPlanId = null;
        this.educationalPlanId = params['id'];

        this.competencesService.getEducationalPlanById(this.educationalPlanId).subscribe(
         data => {
           this.educationalPlanCompetences = data;
         }
        );
    });

  }

}
