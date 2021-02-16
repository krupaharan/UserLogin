import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message:boolean = false;
  
  constructor(private formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.form.value.username);
    if (this.form.valid) {
      console.log(this.form);
      var username = this.form.value.username;
      var password = this.form.value.password;
      sessionStorage.setItem("userName", username);
      this._router.navigate(['home'])
      
      /* if(username == "test@vmware.com" && password == "test123"){
      } else {
        this.message =  true;
      }	*/
    }
  }
}
