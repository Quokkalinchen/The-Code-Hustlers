import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../../../competences.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allachievedcompetences',
  templateUrl: './allachievedcompetences.component.html',
  styleUrls: ['./allachievedcompetences.component.css']
})
export class AllachievedcompetencesComponent implements OnInit {
  private allAchievedCompetences = "";

  constructor(private competencesService: CompetencesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.competencesService.getStudentAchievedCompetences().subscribe(
     data => {
       this.prepareCompetences(data);

       this.allAchievedCompetences = data;
     }
    );
  }

private prepareCompetences(data){
  let chapterDetails = "";
  for (let competence of data) {
      chapterDetails = "";
      this.competencesService.getChapterDetails(competence.chapterId).subscribe(
       data => {
         chapterDetails =  data;
       }
      );
  }
}

  generateImagePath(chapterId){
    var chapterPath = 'chapter'
    if (chapterId < 10){
      chapterPath = chapterPath + '0' + chapterId;
    }else{
      chapterPath = chapterPath + chapterId;
    }
    return chapterPath
  }

}
