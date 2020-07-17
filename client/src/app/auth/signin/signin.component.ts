import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  public error:string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  public submit():void{
      this.authService.signin(this.form.value).subscribe( () => {
            this.router.navigate(['/']);
      }, err =>{
            this.error = err;

      });
  }
}


