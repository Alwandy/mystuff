import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NewsComponent }   from './news/news.component';
import { JoinusComponent }   from './joinus/joinus.component';
import { ApitestComponent }   from './apitest/apitest.component';


const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'joinus', component: JoinusComponent },
  { path: 'apitest', component: ApitestComponent },
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
