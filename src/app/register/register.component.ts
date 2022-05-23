import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({

    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    userId:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {

    var uname = this.registerForm.value.uname
    var userId = this.registerForm.value.userId
    var pwd = this.registerForm.value.pwd

    // console.log(this.registerForm);


    if (this.registerForm.valid) {

      this.ds.register(uname, userId, pwd)
        .subscribe((result: any) => {

          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
          }
        },
          (result) => {
            alert(result.error.message)
          })

    } else {
      alert("invalid")
    }
  }

}