import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private http:HttpClient,) {}

  public signup(user:User): Observable<User> {
    return this.http.post<User>('/api/auth',user);
  }



}
