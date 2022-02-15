import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-step',
  templateUrl: './site-step.component.html',
  styleUrls: ['./site-step.component.scss']
})
export class SiteStepComponent implements OnInit {

  @Input() services : any;

  lang          : any = localStorage.getItem('lang')
  stepArr       : any = [
    {
      id : 1,
      name : this.lang === 'ar' ? 'أختر خدمتك' : 'Select your services',
      icon : 'icon-bag'
    },
    {
      id : 2,
      name : this.lang === 'ar' ? 'الفروع' : 'Branches',
      icon : 'icon-file'
    },
    {
      id : 3,
      name : this.lang === 'ar' ? 'التاريخ و الوقت' : 'Date and time',
      icon : 'icon-calendar'
    }
  ]
  cal           : any = {
    time        : '',
    date        : ''
  }
  location      : any = {
    name        : '',
    map         : ''
  }
  active        : any = '';
  closeResult         = '';
  item                = null;

  constructor(private modalService: NgbModal, private router: Router) {

  }

  ngOnInit(): void {

    let allServies  = JSON.parse(localStorage.getItem("allser") || '[]');
    
    if(this.router.url !== '/home'){
      this.services       = allServies;
    }

  }

  openModal(elemnt:any, id:any) {
    if(elemnt === ''){
      this.modalService.open(elemnt, { centered: true });
    }else{
      this.modalService.open(elemnt, { centered: true });
    }
    this.item = id
  }

  removeItem(item:any) {
    
    this.services.splice(item, 1);

    localStorage.setItem("allser", JSON.stringify(this.services));

  }

  


}
