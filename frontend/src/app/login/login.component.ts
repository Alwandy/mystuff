import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  providers: [ Auth ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  address: String
  constructor(private auth: Auth) {}

  ngOnInit() {
  }
}
