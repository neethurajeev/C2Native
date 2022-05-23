import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a="User Id  Please!!!"
pswd="Password Please"
userId=""
pwd=""

  loginForm = this.fb.group({

    userId:['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {


  }

  login() {

    var userId = this.loginForm.value.userId
    var pwd = this.loginForm.value.pwd

    if (this.loginForm.valid) {

      // call dataservice

      this.ds.login(userId, pwd)
        .subscribe((result: any) => {

          if (result) {

            localStorage.setItem('currentUser', JSON.stringify(result.currentUser))
            localStorage.setItem('currentUserId', JSON.stringify(result.currentUserId))
            localStorage.setItem('token', JSON.stringify(result.token))

            alert(result.message)

            this.router.navigateByUrl('dashboard')
          }
        },
          (result: any) => {
            alert(result.error.message)
          })

    } else {
      alert("invalid form")
    }
  }

}