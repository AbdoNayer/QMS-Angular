import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.scss']
})
export class ChooseDateComponent implements OnInit {

  times : any = [
    {
      text : '1 : 00 am'
    },
    {
      text : '2 : 00 am'
    },
    {
      text : '3 : 00 am'
    },
    {
      text : '4 : 00 am'
    },
    {
      text : '5 : 00 am'
    },
    {
      text : '6 : 00 am'
    },
    {
      text : '7 : 00 am'
    },
    {
      text : '8 : 00 am'
    },
    {
      text : '9 : 00 am'
    },
    {
      text : '10 : 00 am'
    },
    {
      text : '11 : 00 am'
    },
    {
      text : '12 : 00 am'
    },
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onDateSelect(date:any){
    console.log(date);
    let dateUp = date.year + '-' + date.month + '-' + date.day;
    (<HTMLInputElement>document.getElementById("date")).value = dateUp;    
  }

  onTimeSelect(time:any){
    (<HTMLInputElement>document.getElementById("time")).value = time;
  }

  modal(done:any) {
    this.modalService.open(done, { centered: true });
  }

}
