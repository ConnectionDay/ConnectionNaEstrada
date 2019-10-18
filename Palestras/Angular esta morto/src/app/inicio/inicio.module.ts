import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { MaterialCoreModule } from 'src/shared/core/material-core/material-core.module';
import { InicioRoutingModule } from './inicio-routing.module';
import { BtnSocialComponent } from './components/btn-social/btn-social.component';
import { FotoService } from './services/fotos.service';
import { CardModule } from 'src/shared/components/card/ap-card.module';
import { FotoModule } from 'src/shared/components/fotos/foto.module';

@NgModule({
  declarations: [
    InicioComponent,
    BtnSocialComponent
  ],
  imports: [
    CommonModule,
    MaterialCoreModule,
    InicioRoutingModule,
    CardModule,
    FotoModule
  ],
  providers: [FotoService]
})
export class InicioModule { }
