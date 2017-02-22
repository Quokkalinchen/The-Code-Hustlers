import { Injectable , Inject} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CompileTokenMetadata } from '@angular/compiler';
import 'rxjs/add/operator/map';

@Injectable()
export class CompetencesService {

  constructor(private http: Http) { }

  getChapters() {
    var headers: Headers;
    headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://46.101.204.215:1337/api/V1/chapter',{headers}).map(response => response.json());
  }

  getEducationalPlan() {
    var headers: Headers;
    headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://46.101.204.215:1337/api/V1/educationalPlan',{headers}).map(response => response.json());
  }

}
