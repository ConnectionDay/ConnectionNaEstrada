import { NgModule } from '@angular/core';
import { CardComponent } from './ap-card.component';
import { MaterialCoreModule } from 'src/shared/core/material-core/material-core.module';

@NgModule({
  imports: [MaterialCoreModule],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule {}
