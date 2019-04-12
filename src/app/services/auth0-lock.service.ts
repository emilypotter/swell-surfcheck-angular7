import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import Auth0Lock from 'auth0-lock';
import { Observable } from 'rxjs';

const helper = new JwtHelperService();

@Injectable()
export class Auth0LockService {
  public lock: any;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private router: Router, private http: HttpClient) {

    const auth0Options = {
      auth: {
        responseType: 'token id_token',
        redirectUrl: 'http://localhost:4200/login',
        scope: 'openid',
        prompt: 'login'
      },
      theme: {
        logo: 'https://cdn4.iconfinder.com/data/icons/marine-3/64/C_Sea_Wave-512.png',
        displayName: 'Swell',
        primaryColor: '#249997'
      },
      languageDictionary: {
        title: 'Log In to Swell'
      },
      autoclose: true,
      oidcConformant: true,
    };

    helper.tokenGetter = () => localStorage.getItem('idToken');

    this.lock = new Auth0Lock(
      'hiHCQTfjRBURrtbZOU98t29E2jAPF9Eu',
      'projectauth.eu.auth0.com',
      auth0Options
    );

    // Listening for the authenticated event
    this.lock.on('authenticated', authResult => {
      // Use the token in authResult to getUserInfo() and save it to localStorage
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          return;
        }
        // document.getElementById('nick').textContent = profile.nickname;
        localStorage.setItem('idToken', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });

    // this.lock.on('signup submit', authResult => {
    //   this.lock.getUserInfo(authResult.idToken, (error, profile) => {
    //     if (error) {
    //       // handle error
    //       return;
    //     }
    //     this.onRegisterSubmit(profile.user_id, profile.name);
    //   });
    // });
  }

  public isAuthenticated(): boolean {
    return !helper.isTokenExpired(this.localStorage.getItem('idToken'));
  }

  public login(): void {
    this.lock.show();
    const url = this.router.url;
    this.localStorage.setItem('callbackUrl', url);
  }

  public logout(): void {
    // Remove tokens and expiry time from this.localStorage.removeItem('idToken');
    this.localStorage.removeItem('profile');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  // public registerInMongo(user): Observable<any> {
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
  // }

  // public onRegisterSubmit(auth0Id: number, name: string) {
  //   const user = {
  //     auth0Id: auth0Id,
  //     name: name
  //   };

  //   this.registerInMongo(user).subscribe((data: any) => {
  //     if (data.success) {
  //       this.router.navigate(['/']);
  //     } else {
  //       this.router.navigate(['/']);
  //     }
  //   });

  // }

}
