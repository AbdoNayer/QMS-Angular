import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigupComponent } from './sigup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Translate Step 1
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SigupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: SigupComponent
      }
    ])
  ]
})
export class SignupModule { }
