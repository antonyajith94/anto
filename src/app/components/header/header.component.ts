import { Component } from '@angular/core';
import { GithubService } from '../../service/github.service';
@Component({
  selector: 'my-header',
  templateUrl:'./header.component.html',
})
export class HeaderComponent{
    search: string;
    userData:any;
    getRepo:any;
    fruits:Array<string> =["mango","apple","orange","grapes"];

    studs:Array<Object>=[{name:'antony',age:23},{name:'karthick',age:23},{name:'senthil',age:23},{name:'ganesh',age:23}];

    
    toShow:boolean;
    myname:string = "antony";
    constructor ( private service: GithubService) {
        this.toShow = true;
        this.userData=false;
        this.getRepo=false;
        console.log("constructor");
        
    }


    onClick() {
        console.log("searching for" + this.search);
        this.service.searchUser( this.search).subscribe((res)=> { 
            console.log(res);
            this.userData = res;
            this.onClickGet();
        });
    
    }
    
   onClickGet() {
       this.service.searchUserGet(this.search).subscribe((res) => {
           console.log(res);
           this.getRepo = res;
       });

        }
}