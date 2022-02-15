import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  loading         : boolean = false;
  error           : any     = '';
  authForm        : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.authForm       = this.fb.group({
      email             :           ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  valditon (){
    if(!this.authForm.value.email){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل البريد الالكتروني' : 'enter the email'
    }else if(this.authForm.value.email !== "nayer@gmail.com"){
      this.error = localStorage.getItem('lang') === 'ar' ? 'البريد غير صالح' : 'email vallid'
    }else{
      this.error = '';
      this.loading = true;
    }
  }

  submitForm() {

    this.valditon();

    if(this.error === ''){
      this.router.navigateByUrl('/newPassword');
    }

  }

}
