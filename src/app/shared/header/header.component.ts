import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//For Translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user :any   = null;  
  setLang     = localStorage.getItem('lang')

  constructor(private router: Router,private translate : TranslateService){}

  ngOnInit(): void {
    
    let authStorage = JSON.parse(localStorage.getItem('Auth') || '{}')
    
    if(authStorage){
      this.user = authStorage
    }

  }

  logOut(){
    localStorage.removeItem('Auth');
    this.router.navigateByUrl('/');
  }

  changeLang(lang:any){

    location.reload();
    localStorage.setItem('lang',lang)
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    
    if(lang === 'ar'){
      document.body.setAttribute("dir", "ltr");
    }else{
      document.body.setAttribute("dir", "rtl");
    }

  }

}
