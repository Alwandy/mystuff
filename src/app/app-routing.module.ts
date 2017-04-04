import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NewsComponent }   from './news/news.component';
import { JoinusComponent }   from './joinus/joinus.component';

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'joinus', component: JoinusComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
