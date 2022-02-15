import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss']
})
export class SigupComponent implements OnInit {

  show            : boolean = false;
  loading         : boolean = false;
  error           : any     = '';
  authForm        : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.authForm           = this.fb.group({
      name                  :           ['', Validators.required],
      email                 :           ['', Validators.required],
      password              :           ['', Validators.required],
      comPassword           :           ['', Validators.required],
      country               :           ['', Validators.required],
      ID                    :           ['', Validators.required],
      company               :           ['', Validators.required],
      adress                :           ['', Validators.required],
      mobile                :           ['', Validators.required],
      phone                 :           ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  showPassword() {
    this.show = !this.show;
  }


  valditon (){
    if(!this.authForm.value.name){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل الاسم بالكامل' : 'Enter the name'
    }else if(!this.authForm.value.email){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل البريد الالكتروني' : 'Enter the email'
    }else if(!this.authForm.value.country){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل المدينة' : 'Enter the country'
    }else if(!this.authForm.value.ID){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل رقم الهوية' : 'Enter the ID'
    }else if(!this.authForm.value.company){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل اسم الشركة' : 'Enter the name company'
    }else if(!this.authForm.value.adress){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل المنطقة' : 'Enter the adress'
    }else if(!this.authForm.value.mobile){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل رقم الهاتف' : 'Enter the mobile'
    }else if(!this.authForm.value.phone){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل رقم الجوال' : 'Enter the phone'
    }else if(!this.authForm.value.password){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل كلمة المرور' : 'Enter the password'
    }else if(!this.authForm.value.comPassword){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل تأكيد كلمة المرور' : 'Enter the confirm password'
    }else if(this.authForm.value.comPassword != this.authForm.value.password){
      this.error = localStorage.getItem('lang') === 'ar' ? 'كلمتي المرور غير متشابهين' : 'The two passwords do not match'
    }else{
      this.error = '';
      this.loading = true;
      this.router.navigateByUrl('/home')
    }
  }

  submitForm() {

    this.valditon();

    if(this.error === ''){

      let authUser = {
        name              : this.authForm.value.name,
        email             : this.authForm.value.email,
        country           : this.authForm.value.country,
        ID                : this.authForm.value.ID,
        companyName       : this.authForm.value.company,
        adress            : this.authForm.value.adress,
        phone             : this.authForm.value.phone,
        mobile            : this.authForm.value.mobile,
      }

      localStorage.setItem('Auth', JSON.stringify(authUser));
      this.router.navigateByUrl('/home');
    }

  }

}
