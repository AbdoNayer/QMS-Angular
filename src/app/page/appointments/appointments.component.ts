import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  listCart  : any = [
    {
      date : '12 JUL',
      time : '10 : 00 PM',
      nameSer : 'Booked services',
      nameLoc : 'Dokki Branch',
      location : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
      code : '3243-4324'
    }
  ]
  list      : any = [
    {
      id : 1,
      name : 'item 1'
    },
    {
      id : 2,
      name : 'item 2'
    },
    {
      id : 3,
      name : 'item 3'
    },
    {
      id : 4,
      name : 'item 4'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
