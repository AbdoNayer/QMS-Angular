import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
// Translate Step 1
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentsComponent
      }
    ])
  ]
})
export class AppointmentsModule { }
