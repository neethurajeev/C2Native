import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class DataService {

  currentDate: any

  constructor(private http: HttpClient) { }


  // register

  register(uname: any, userId: any, pwd: any) {

    const data = {
      uname,
      userId,
      pwd
    }

    //   // api calling register
    return this.http.post(' http://localhost:3000/register', data)
  }


  // login

  login(userId: any, pwd: any) {

    const data = {
      userId,
      pwd
    }

    // api call login
    return this.http.post(' http://localhost:3000/login', data)

  }

  // add event

  addEvent(userId: any, token: any, date: any, events: any) {


    const data = {

      userId,
      token,
      date,
      events

    }


    // api call addEvent
    return this.http.post(' http://localhost:3000/addEvent', data)


  }


  // viewDetails

  viewDetails(userId: any) {

    const data = {
      userId,

    }

    // api call viewDetails
    return this.http.post(' http://localhost:3000/viewDetails', data)
  }

  // delete 

  deleteAcc(userId: any) {

   

    return this.http.delete(' http://localhost:3000/deleteAcc/'+userId)

  }


}