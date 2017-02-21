import { Injectable , Inject} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CompileTokenMetadata } from '@angular/compiler';
import 'rxjs/add/operator/map';



@Injectable()
export class LoginService {
    email: string;
    password: string;

    constructor(private http: Http) { }

    login(username, password) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put('http://46.101.204.215:1337/api/V1/login',
            JSON.stringify({ username, password })
            , { headers }
        ).map((res: Response) => {
            if (res.status < 200 || res.status >= 300) {
              console.log("error");
              throw new Error('This request has failed ' + res.status);
            }
            else {
              localStorage.setItem('token',res.json().token);
              return res.json();
            }
        });
    }

    logout(){
      localStorage.removeItem('token');
    }
}
