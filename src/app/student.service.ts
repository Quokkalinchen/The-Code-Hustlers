import { Injectable , Inject} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CompileTokenMetadata } from '@angular/compiler';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';



@Injectable()
export class StudentService {

  constructor(private http: Http) {


}

  private getHeader(): Headers{
    var headers: Headers;
    headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  getStudentData() {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/student',{headers}).map(response => response.json());
  }

  getAllAvatars() {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/avatar',{headers}).map(response => response.json());

  }

  getAvatar(id) {
    var headers: Headers;
    headers = this.getHeader();
    return this.http.get('http://46.101.204.215:1337/api/V1/avatar/' + id,
    {headers}).map(response => response.json());
  }

  changePassword(password, newpassword){
    var headers: Headers;
    headers = this.getHeader();
    return this.http.put('http://46.101.204.215:1337/api/V1/requestPasswordRecovery',
        JSON.stringify({ password, newpassword })
        , {headers}
    ).map((res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          console.log("error");
          alert('Passwort konnte nicht geändert werden. Es ist ein Fehler aufgetreten.');
          throw new Error('This request has failed ' + res.status);
        }
        else {
          return res.json();
        }
    });
  }

  changeAvatar(avatarId){
    var headers: Headers;
    headers = this.getHeader();
    return this.http.put('http://46.101.204.215:1337/api/V1/avatar/',
        JSON.stringify({ avatarId })
        , {headers}
    ).map((res: Response) => {

        if (res.status < 200 || res.status >= 300) {
          console.log("error");
          alert('Avatar konnte nicht geändert werden. Es ist ein Fehler aufgetreten.');
          throw new Error('This request has failed ' + res.status);
        }
        else {
          return res.json();
        }
    });
  }

  deleteProfile(){
    var headers: Headers;
    headers = this.getHeader();
    return this.http.delete('http://46.101.204.215:1337/api/V1/student', {headers}
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
