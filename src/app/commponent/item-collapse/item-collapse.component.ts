import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-collapse',
  templateUrl: './item-collapse.component.html',
  styleUrls: ['./item-collapse.component.scss']
})
export class ItemCollapseComponent implements OnInit {

  @Input() item : any;
  @Output() newItemEvent  = new EventEmitter<any>();

  allCate         :any = [];
  services        :any = [];
  subCategory     :any = [];
  notFound        :any = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.allCate.push(this.item);
  }

  modalTerms(terms:any) {
    this.modalService.open(terms, { centered: true , size: 'lg' });
  }

  onGitCategory(item:any, i:any, id:any){

    if(!item.service){
      this.notFound = 'Not Found services Of This Category';
    }else{
      this.notFound = ''
    }

    let tableUpView             = document.querySelectorAll('.table-cell-item');

    for (let i = 0; i < tableUpView.length; i++) {
      let cate  :any        = document.getElementById(`cate-${id}`);
      if(tableUpView[i] != cate){
        tableUpView[i].classList.remove("active");
      }
    }
    
    let cate  :any        = document.getElementById(`cate-${id}`);

    if (cate.classList.contains("active")) {
      cate.classList.remove("active");
    } else {
      cate.classList.add("active");
    }
    
    this.services     = item.service;
    this.subCategory  = item.subCategory;
    this.allCate.splice(i + 1, this.allCate.length);

  }

  onGitSubCategoryId(item:any, upItem:any){

    this.newItemEvent.emit({item, upItem});

    this.services     = item.service;
    this.subCategory  = item.subCategory;

    if(!this.services && !this.subCategory){

      let cate:any                = document.getElementById(`cate-${upItem.id}`);
      cate.classList.add("selected-collapse");

      let tableUpView             = document.querySelectorAll('.table-cell-item');
      for (let i = 0; i < tableUpView.length; i++) {
        tableUpView[i].classList.remove("active");
      }

    }

    this.allCate.push(item);

  }

}
