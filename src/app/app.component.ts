import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // template: `
//   <div>
//     <app-ad-banner [ads]="ads"></app-ad-banner>
//   </div>
// `
templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newAngProj';
  parentMessage = "message from parent"
  ads: AdItem[];
  arrBirds:any;
  serched='';
  constructor( private myserv:MyserviceService,private adService: AdService, private httpService:HttpClient){}
  ngOnInit() {
    this.ads = this.adService.getAds();
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  // getData(){
  //   this.http.get('../assets/data.json').subscribe(){

  //   }
  }
