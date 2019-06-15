import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './SqrtPipe';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MyserviceService } from './myservice.service';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GitHomeComponent } from './git-home/git-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    SqrtPipe,
    NewCmpComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent, HeroProfileComponent, GitHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
