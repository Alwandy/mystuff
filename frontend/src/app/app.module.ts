//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';

// Components
import { ApitestComponent } from './apitest/apitest.component';
import { NavigationComponent } from './Navigation/Navigation.component';
import { LoginComponent } from './login/login.component';
import { JoinusComponent } from './joinus/joinus.component';
import { AppComponent }  from './app.component';
import { NewsComponent } from './news/news.component';
import { MembersComponent } from './members/members.component';


//Services
import { ApiService } from './api.service';



@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, JsonpModule ],
  providers: [ApiService ],
  declarations: [ AppComponent, NewsComponent, JoinusComponent, LoginComponent, NavigationComponent, MembersComponent ,ApitestComponent ],
  bootstrap:    [ AppComponent, LoginComponent, NavigationComponent]
})
export class AppModule { }
