import { Injectable , Inject} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CompileTokenMetadata } from '@angular/compiler';
import 'rxjs/add/operator/map';



@Injectable()
export class StudentService {

  constructor(private http: Http) {


}

  getStudentData() {
    var headers: Headers;
    headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://46.101.204.215:1337/api/V1/student',{headers}).map(response => response.json());

  }

  changePasword(password, newpassword){
    var headers: Headers;
    headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://46.101.204.215:1337/api/V1/requestPasswordRecovery',
        JSON.stringify({ password, newpassword })
        , {headers}
    ).map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          console.log("error");
          throw new Error('This request has failed ' + res.status);
        }
        else {
          return res.json();
        }
    });
  }

  deleteProfile(password){
    var headers: Headers;
    headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://46.101.204.215:1337/api/V1/student/', {headers}
    ).map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          console.log("error");
          throw new Error('This request has failed ' + res.status);
        }
        else {
          return res.json();
        }
    });
  }

}
