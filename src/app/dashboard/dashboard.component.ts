import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardForm = this.fb.group({
    date: ['', Validators.required],
    events: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }


  addEvent() {

    var date = this.dashboardForm.value.date
    var events = this.dashboardForm.value.events


    var userId = JSON.parse(localStorage.getItem('currentUserId') || '')
    var token = JSON.parse(localStorage.getItem('token') || '')

    // alert(date)



    if (this.dashboardForm.valid) {

      // call dataservice


      this.ds.addEvent(userId, token, date, events,)
        .subscribe((result: any) => {

          if (result) {

            localStorage.setItem('currentDate', JSON.stringify(result.currentDate))

            alert(result.message)

            this.router.navigateByUrl('viewEvent')

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