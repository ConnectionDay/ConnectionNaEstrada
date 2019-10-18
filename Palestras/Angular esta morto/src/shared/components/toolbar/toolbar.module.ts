import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
