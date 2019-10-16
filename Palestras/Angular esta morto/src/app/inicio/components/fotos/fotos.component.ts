import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './view/fotos.component.html',
  styleUrls: ['./view/fotos.component.scss']
})
export class FotoComponent {
  @Input() fotos: [];
  @Output() clickCarregarMaisFotos = new EventEmitter();


  public retornarCaminhoFoto(nomeFoto: string) {
    return `../../../assets/images/evento/${nomeFoto}`;
  }

  public carregarMaisFotos(): void {
    this.clickCarregarMaisFotos.emit('clicou carregar mais');
  }
}
