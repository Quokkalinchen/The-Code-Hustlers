import { Injectable , Inject} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CompileTokenMetadata } from '@angular/compiler';
import 'rxjs/add/operator/map';



@Injectable()
export class StudentService {
   headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Authorization', localStorage.getItem('token'));
    this.headers.append('Content-Type', 'application/json');
}

  getStudentData() {
    return this.http.get('http://46.101.204.215:1337/api/V1/student',this.headers).map(response => response.json());

  }

}
