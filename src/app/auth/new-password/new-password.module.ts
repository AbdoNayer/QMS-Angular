import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordComponent } from './new-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Translate Step 1
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    NewPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewPasswordComponent
      }
    ])
  ]
})
export class NewPasswordModule { }
