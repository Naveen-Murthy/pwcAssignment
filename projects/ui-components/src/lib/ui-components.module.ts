import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponentsComponent } from './ui-components.component';



@NgModule({
  declarations: [
    UiComponentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponentsComponent
  ]
})
export class UiComponentsModule { }
