import { Component, OnInit } from '@angular/core';
import { Auth0LockService } from '../../services/auth0-lock.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth0LockService: Auth0LockService) { }

  ngOnInit() {
  }

}
