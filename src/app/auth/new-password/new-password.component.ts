import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  show            : boolean = false;
  loading         : boolean = false;
  error           : any     = '';
  authForm        : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.authForm       = this.fb.group({
      code                  :           ['', Validators.required],
      password              :           ['', Validators.required],
      comPassword           :           ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  valditon (){
    if(!this.authForm.value.code){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل كود التفعيل' : 'Enter the code'
    }else if(!this.authForm.value.password){
      this.error = localStorage.getItem('lang') === 'ar' ? 'أدخل كلمة المرور الجديدة' : 'Enter the password'
    }else if(!this.authForm.value.comPassword){
      this.error = localStorage.getItem('lang') === 'ar' ? 'تاكيد كلمة المرور الجديدة' : 'Enter the confirm password'
    }else if(this.authForm.value.comPassword != this.authForm.value.password){
      this.error = localStorage.getItem('lang') === 'ar' ? 'كلمتي المرور غير متطابقتين' : 'The two passwords do not match'
    }else{
      this.error = '';
      this.loading = true;
    }
  }

  showPassword() {
    this.show = !this.show;
  }

  submitForm() {

    this.valditon();

    if(this.error === ''){
      this.loading = false;
      this.router.navigateByUrl('/');
    }

  }

}
