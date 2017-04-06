import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ApitestComponent } from './apitest/apitest.component';
import { ApitestService } from './apitest.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, JsonpModule ],
  providers: [ApitestService],
  declarations: [ AppComponent, NewsComponent, JoinusComponent, LoginComponent, ApitestComponent ],
  bootstrap:    [ AppComponent, LoginComponent]
})
export class AppModule { }
