import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user            : any     = {};
  loading         : boolean = false;
  error           : any     = '';
  authForm        : FormGroup;

  constructor(private fb: FormBuilder) { 
    this.authForm           = this.fb.group({
      name                  :           [this.user.name, Validators.required],
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

  valditon (){
    if(!this.authForm.value.name){
      this.error = 'ُEnter the name'
    }else if(!this.authForm.value.email){
      this.error = 'ُEnter the email'
    }else if(!this.authForm.value.country){
      this.error = 'ُEnter the country'
    }else if(!this.authForm.value.ID){
      this.error = 'ُEnter the ID'
    }else if(!this.authForm.value.company){
      this.error = 'ُEnter the name company'
    }else if(!this.authForm.value.adress){
      this.error = 'ُEnter the adress'
    }else if(!this.authForm.value.mobile){
      this.error = 'ُEnter the mobile'
    }else if(!this.authForm.value.phone){
      this.error = 'ُEnter the phone'
    }else{
      this.error    = '';
      this.loading  = true;
    }
  }

  ngOnInit(): void {

    let authStorage = JSON.parse(localStorage.getItem('Auth') || '{}')
    this.user = authStorage

  }

  onToggleEdit(val:any){
    let btn:any       = document.getElementById(val);
    btn.disabled      = !btn.disabled;
    btn.focus();
  }

  onDiscard(){

    var num1 = ((document.getElementById("name") as HTMLInputElement).value);
    console.log(num1);

    let authStorage   = JSON.parse(localStorage.getItem('Auth') || '{}')
    this.user         = authStorage

    let input:any       = document.getElementsByTagName('input');
    for (var i = 0; i < input.length; i++) {
      input[i].disabled = true;
    }


  }

  onSave(){
    this.valditon();
  
      if(this.error === ''){
        
        this.loading  = false;
  
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
        location.reload();
      }
  }

}
