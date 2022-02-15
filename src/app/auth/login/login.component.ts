import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  show            : boolean = false;
  loading         : boolean = false;
  error           : any     = '';
  authForm        : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.authForm       = this.fb.group({
      email             :           ['', Validators.required],
      password          :           ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  showPassword() {
    this.show = !this.show;
  }

  valditon (){
    if(!this.authForm.value.email){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل البريد الالكتروني' : 'enter the email'
    }else if(this.authForm.value.email !== "nayer@gmail.com"){
      this.error = localStorage.getItem('lang') === 'ar' ? 'البريد غير صالح' : 'email vallid'
    }else if(!this.authForm.value.password){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل كلمة المرور' : 'enter the password'
    }else if(this.authForm.value.password !== "123456"){
      this.error = localStorage.getItem('lang') === 'ar' ? 'كلمة المرور غير صالحة' : 'password vallid'
    }else{
      this.error = '';
      this.loading = true;
    }
  }

  submitForm() {

    this.valditon();

    if(this.error === ''){

      let authUser = {
        name              : 'Sh3wZa',
        email             : this.authForm.value.email,
        country           : 'Egypt',
        ID                : '23423423423423',
        companyName       : 'GET Company',
        adress            : 'Sheraton, Cairo',
        phone             : '201001846667',
        mobile            : '0502133432',
      }

      localStorage.setItem('Auth', JSON.stringify(authUser));
      this.router.navigateByUrl('/home');
    }

  }

}
