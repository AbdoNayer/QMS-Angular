import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';
// Translate Step 1
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForgetPasswordComponent
      }
    ])
  ]
})
export class ForgetPasswordModule { }
