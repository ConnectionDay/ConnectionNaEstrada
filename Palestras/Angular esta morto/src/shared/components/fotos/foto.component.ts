import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './view/fotos.component.html',
  styleUrls: ['./view/fotos.component.scss']
})
export class FotoComponent {

  @Input() fotos: string[] = [];
  @Output() clickCarregarMaisFotos = new EventEmitter();

  public backgroundColor = '#1E5B6F';
  public opacidade = 0.7;

  public retornarCaminhoFoto(nomeFoto: string) {
    return `../../../assets/images/evento/${nomeFoto}`;
  }

  public carregarMaisFotos(): void {
    this.clickCarregarMaisFotos.emit('clicou carregar mais');
  }
}
