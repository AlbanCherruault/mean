import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  public error:string;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

  public submit():void{
    this.authService.signup(this.form.value).subscribe( () => {
      this.router.navigate(['/']);
    }, err =>{
      this.error = err;

    });
  }

}
