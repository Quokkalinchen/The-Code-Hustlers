import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../../../competences.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-achievedcompetences',
  templateUrl: './achievedcompetences.component.html',
  styleUrls: ['./achievedcompetences.component.css']
})
export class AchievedcompetencesComponent implements OnInit {
  private allStudentCompetences = "";
  private chapterDetails = "";
  private chapterId: number;
  private chapterPath = 'chapter';

  constructor(private competencesService: CompetencesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.chapterId = null;
        this.chapterPath = 'chapter';
        this.chapterId = params['id'];

        if (this.chapterId < 10){
          this.chapterPath = this.chapterPath + '0' + this.chapterId;
        }else{
          this.chapterPath = this.chapterPath + this.chapterId;
        }


        this.competencesService.getStudentAchievedCompetencesPerChapter(this.chapterId).subscribe(
         data => {
           this.allStudentCompetences = data;
         }
        );
        this.competencesService.getChapterDetails(this.chapterId).subscribe(
         data => {
           this.chapterDetails = data;
         }
        );
    });

  }

}
