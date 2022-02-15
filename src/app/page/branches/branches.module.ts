import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BranchesComponent } from './branches.component';
import { SharedModule } from 'src/app/shared/shared.module';
// Translate Step 1
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BranchesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BranchesComponent
      }
    ])
  ]
})
export class BranchesModule { }
