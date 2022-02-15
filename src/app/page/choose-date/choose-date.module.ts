import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChooseDateComponent } from './choose-date.component';
import { SharedModule } from 'src/app/shared/shared.module';
// Translate Step 1
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ChooseDateComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChooseDateComponent
      }
    ])
  ]
})
export class ChooseDateModule { }
