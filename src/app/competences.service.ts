import { Injectable , Inject} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CompileTokenMetadata } from '@angular/compiler';
import 'rxjs/add/operator/map';

@Injectable()
export class CompetencesService {

  constructor(private http: Http) { }

  private getHeader(): Headers{
    var headers: Headers;
    headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  getChapters() {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/chapter',{headers}).map(response => response.json());
  }

  getChapterDetails(id) {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/chapter/' + id,{headers}).map(response => response.json());
  }

  getChapterIllustrations(id) {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/chapter/' + id,{headers}).map(response => response.json());
  }



  getEducationalPlan() {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/educationalPlan',{headers}).map(response => response.json());
  }



  getStudentCompetencesPerChapter(id) {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/studentcompetence?checked=false&chapterId=' + id,
      {headers}).map(response => response.json());
  }

  getStudentAchievedCompetencesPerChapter(id) {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/studentcompetence?checked=true&chapterId=' + id,
      {headers}).map(response => response.json());
  }

  getStudentAchievedCompetences() {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/studentcompetence?checked=true',
      {headers}).map(response => response.json());
  }

  getEducationalPlanById(id) {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/educationalPlan/' + id,{headers}).map(response => response.json());
  }

}
