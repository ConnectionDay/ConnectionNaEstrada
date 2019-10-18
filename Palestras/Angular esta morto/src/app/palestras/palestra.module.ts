import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalestraComponent } from './palestra.component';
import { PalestraRoutingModule } from './palestra-routing.module';

@NgModule({
  declarations: [PalestraComponent],
  imports: [CommonModule, PalestraRoutingModule]
})
export class PalestraModule { }
