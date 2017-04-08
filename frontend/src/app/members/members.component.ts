import { Component, OnInit }            from '@angular/core';
import { Auth }                 from '../auth.service';
import { ApiService } from '../api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-members',
  providers: [ Auth ],
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {

  user: any = "";

  constructor(private userService: ApiService, private auth: Auth) {
  }

  ngOnInit() {
    var profile = JSON.parse(localStorage.getItem('profile'));
    if(profile != null){
    this.userService.getUser(profile.user_id, profile.name).subscribe(user => {
      this.user = user;
    });
    }
  }
}
