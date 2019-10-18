import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { EscurecerPassarMouseModule } from 'src/shared/directives/escurecer-ao-passar-mouse/escurecer-ao-passar-mouse.module';
import { MaterialCoreModule } from 'src/shared/core/material-core/material-core.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialCoreModule,
    EscurecerPassarMouseModule
  ],
  declarations: [FotoComponent],
  exports: [FotoComponent]
})
export class FotoModule { }


