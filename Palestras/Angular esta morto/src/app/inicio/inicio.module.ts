import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { MaterialCoreModule } from 'src/shared/core/material-core/material-core.module';
import { InicioRoutingModule } from './inicio-routing.module';
import { BtnSocialComponent } from './components/btn-social/btn-social.component';
import { FotoComponent } from './components/fotos/fotos.component';
import { CardModule } from 'src/shared/layout/card/ap-card.module';
import { FotoService } from './services/fotos.service';
import { EscurecerPassarMouseModule } from 'src/shared/directives/escurecer-ao-passar-mouse/escurecer-ao-passar-mouse.module';

@NgModule({
  declarations: [
    InicioComponent,
    BtnSocialComponent,
    FotoComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MaterialCoreModule,
    InicioRoutingModule,
    EscurecerPassarMouseModule
  ],
  providers: [FotoService]
})
export class InicioModule { }
