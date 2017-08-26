import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    constructor(private http: Http) {
        

    }

    searchUser(username: string) {
        if(username) {
            return this.http.get('http://api.github.com/users/'+ username + '?client_id=f08359d578807b117322&client_secret=1c183a4c5135279ac30eca1aab70dadb6ebff616').map((data)=> data.json());
        }
        }
    searchUserGet(username:string) {
        return this.http.get('https://api.github.com/users/'+ username + '/repos?client_id=f08359d578807b117322&client_secret=1c183a4c5135279ac30eca1aab70dadb6ebff616').map((data)=> data.json());
    }
    }
