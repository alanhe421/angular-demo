import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import {RouterModule, Routes} from "@angular/router";
const pRoutes: Routes = [
  {
    path: '',
    component: CssComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pRoutes),
  ],
  declarations: [CssComponent]
})
export class CssModule { }
