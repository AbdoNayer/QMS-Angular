import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  ourLocation: any = [
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    },
    {
      id          : 1,
      branch      : 'Dokki Branch',
      location    : 'Giza, No. 21 Mohey Al deen Abo Al ezz, Al Dokki',
    }
  ]
  show : any = false
  showFilter : any = false
  constructor() { }

  ngOnInit(): void {
  }

  onFade() {
    this.show = !this.show;
  }

  onFilter(){
    this.showFilter = !this.showFilter;
  }

}
