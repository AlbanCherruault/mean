import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {BehaviorSubject, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {JwtToken} from "../models/jwt-token.model";

@Injectable()
export class AuthService {

  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
        isAuthenticated:null,
        token:null
  })

  constructor(
    private http:HttpClient,
    ) {
        this.initToken();
  }

  private initToken(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.jwtToken.next({
        isAuthenticated: true,
        token: token
      });
    } else {
      this.jwtToken.next({
        isAuthenticated: false,
        token: null
      });
    }
  }


  public signup(user:User): Observable<User> {
    console.log("Test")
    return this.http.post<User>('api/auth/signup',user);
  }

  public signin(credentials: { email: string, password: string}): Observable<string> {
    return this.http.post<string>('/api/auth/signin', credentials).pipe(
      tap(( token: string ) => {
        this.jwtToken.next({
          isAuthenticated: true,
          token: token
        });
        localStorage.setItem('jwt', token);
      })
    );
  }

}
