import { Component, OnInit }            from '@angular/core';
import { Auth }   from '../auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navigation',
  providers: [ Auth ],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit  {
  address: String
  constructor(private auth: Auth) {}

  ngOnInit() {
  }
}
