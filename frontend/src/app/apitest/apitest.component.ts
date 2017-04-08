import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css']
})
export class ApitestComponent implements OnInit {
  user:any = "";
  constructor(private userService: ApiService) { }

  ngOnInit() {
    var profile = JSON.parse(localStorage.getItem('profile'));
    this.userService.getUser(profile.user_id, profile.name).subscribe(user => {
      this.user = user;
    });
  }

}
