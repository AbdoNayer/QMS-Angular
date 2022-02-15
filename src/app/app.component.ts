import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
//For Translation
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router,private translate : TranslateService){
    if(localStorage.getItem('lang') === 'en')
    {
      document.body.setAttribute("dir", "ltr");
      translate.setDefaultLang('en');
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }else{
      document.body.setAttribute("dir", "rtl");
      translate.setDefaultLang('ar');
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    }
  }

  ngOnInit(){
    
    AOS.init();

    let authStorage = JSON.parse(localStorage.getItem('Auth') || '{}')

    if(JSON.stringify(authStorage) === '{}'){
      this.router.navigateByUrl('/')
    }else{
      this.router.navigateByUrl('/home')
    }


  }

}
