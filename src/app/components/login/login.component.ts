import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Auth0LockService } from '../../services/auth0-lock.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faSpinner = faSpinner;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private router: Router, private auth0LockService: Auth0LockService) { }

  ngOnInit() {
    this.auth0LockService.lock.on('authenticated', authResult => {
      this.router.navigateByUrl(this.localStorage.getItem('callbackUrl'));
    });
  }
}
