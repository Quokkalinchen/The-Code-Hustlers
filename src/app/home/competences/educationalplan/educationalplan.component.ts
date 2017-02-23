import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../../../competences.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-educationalplan',
  templateUrl: './educationalplan.component.html',
  styleUrls: ['./educationalplan.component.css']
})
export class EducationalplanComponent implements OnInit {

  constructor(private competencesService: CompetencesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
