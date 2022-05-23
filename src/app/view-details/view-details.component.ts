import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {


  userId: any;
  events: any;
  currentDate: any

  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) {

    this.userId = JSON.parse(localStorage.getItem('currentUserId') || '')

    this.ds.viewDetails(this.userId)
      .subscribe((result: any) => {

        this.events = result.records

      },
        (result: any) => {
          alert(result.error.message)
        })

  }



  ngOnInit(): void {
  }


  deleteAcc() {

    var userId = JSON.parse(localStorage.getItem('currentUserId') || '')


    this.ds.deleteAcc(userId)
      .subscribe((result: any) => {

        if (result) {
          alert(result.message)
          this.router.navigateByUrl('')
        }
      },
        (result: any) => {
          alert(result.error.message)
        })
  }

}