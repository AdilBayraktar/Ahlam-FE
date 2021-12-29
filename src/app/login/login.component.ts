import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl("", Validators.required )
    })
  }

  signedIn(form: NgForm){
    console.log(form.value)
    form.reset();
  }

}
