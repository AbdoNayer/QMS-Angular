import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Translate Step 1
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ]
})
export class LoginModule { }
