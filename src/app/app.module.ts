import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinusComponent } from './joinus/joinus.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, NewsComponent, JoinusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
