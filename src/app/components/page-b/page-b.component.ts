import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {
  loginCredentials= {
    username: "Athishya",
    password: "Ar26",
    loginDate: "07/08/2019",
    loginTime: "16:16"
  }

  constructor(private httpClient: HttpClient) {
    console.log("I'm a Constructor");
   }

  ngOnInit() {
    console.log("I'm a Lifecycle hook");
  }
  saveData(){
    console.log(this.loginCredentials);
    let httpRequest = this.httpClient.get('https://api.myjson.com/bins/1e31fj');
    httpRequest.subscribe((data)=>{
      console.log(data);
    },(err:any)=>{
      console.error(err);
    });

    let httpRequest2 = this.httpClient.put('https://api.myjson.com/bins/1e31fj', this.loginCredentials);
    httpRequest2.subscribe((data)=>{
      console.log(data);
    },(err:any)=>{
      console.error(err);
    });
  }
  saveNewData(){
    let httpRequest = this.httpClient.post('https://api.myjson.com/bins', this.loginCredentials);
    httpRequest.subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.error(err);
    });
  }

}
