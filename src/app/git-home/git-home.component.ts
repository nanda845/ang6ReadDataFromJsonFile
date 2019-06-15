import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-home',
  templateUrl: './git-home.component.html',
  styleUrls: ['./git-home.component.css']
})
export class GitHomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
data:any;
  ngOnInit() {
    this.http.get('https://api.github.com/users').subscribe(data=>{
      console.log("data from git hub")
      console.log(data)
    })
  }

}
