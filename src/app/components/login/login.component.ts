import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginCredentials= {
    username:"Revathy",
    password: "abcd1234"

  }

  constructor(private httpClient:HttpClient) { 
    console.log("Hi! I'm a Constructor");
  }

  ngOnInit() {
    console.log("Hi! I'm ngOnInIt");
  }

  saveData(){
    console.log(this.loginCredentials);
    let httpRequest = this.httpClient.get("https://api.myjson.com/bins/hnjc7");
    httpRequest.subscribe((result)=>{
      console.log(result);
    }, (err:any)=>{
      console.error(err);
    });

    let httpRequest2 = this.httpClient.put("https://api.myjson.com/bins/hnjc7", this.loginCredentials);
    httpRequest.subscribe((result)=>{
      console.log(result);
    }, (err:any)=>{
      console.error(err);
    });
  }
  saveNewData() {
    let httpRequest = this.httpClient.post('https://api.myjson.com/bins', this.loginCredentials);
    httpRequest.subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.error(err);
    });
  }
}
