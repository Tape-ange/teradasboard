import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
     RouterModule,
     MatIconModule,
  ],
  exports : [
   
  ]
})
export class LayoutModule { }
