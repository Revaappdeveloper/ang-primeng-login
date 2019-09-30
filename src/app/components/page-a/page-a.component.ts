import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

  loginCredentials= {
    username:"Pinky",
    password: "ar26"
  }

  constructor(private httpClient:HttpClient) {
    console.log("Hi!");
   }

  ngOnInit() {
    console.log("Lifecycle hook initiated");
  }

  saveData(){
    console.log(this.loginCredentials);
    let httpRequest = this.httpClient.get('https://api.myjson.com/bins/1cc7uv');
    httpRequest.subscribe((data)=>{
      console.log(data);
    },(err:any)=>{
      console.error(err);
    });

    let httpRequest2 = this.httpClient.put('https://api.myjson.com/bins/1cc7uv', this.loginCredentials);
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
