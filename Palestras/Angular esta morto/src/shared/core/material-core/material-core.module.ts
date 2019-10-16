import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [FlexLayoutModule, MatIconModule],
  exports: [FlexLayoutModule, MatIconModule]
})
export class MaterialCoreModule {
}
