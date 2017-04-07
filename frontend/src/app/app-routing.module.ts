import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NewsComponent }   from './news/news.component';
import { JoinusComponent }   from './joinus/joinus.component';
import { ApitestComponent }   from './apitest/apitest.component';
import {MembersComponent} from './members/members.component';

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'joinus', component: JoinusComponent },
  { path: 'apitest', component: ApitestComponent },
  {path: 'members', component: MembersComponent},
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
