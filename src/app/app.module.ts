import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, NewsComponent, JoinusComponent, LoginComponent ],
  bootstrap:    [ AppComponent, LoginComponent]
})
export class AppModule { }
