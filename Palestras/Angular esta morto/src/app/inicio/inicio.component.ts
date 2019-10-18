import { Component, OnInit } from '@angular/core';
import { FotoService } from './services/fotos.service';

@Component({
  templateUrl: './view/inicio.component.html',
  styleUrls: ['./view/inicio.component.scss']
})
export class InicioComponent implements OnInit {

  mensagemExibicao = 'Bem vindos ao ConnectionDay';
  fotos: string[];

  constructor(private servicoFoto: FotoService) { }

  ngOnInit(): void {
    this.fotos = this.servicoFoto.listarFotos();
  }

  carregarMaisFotos(event): void {
    console.log(event);
    this.fotos = [...this.fotos].concat(['01.jpg', '02.jpg', '03.jpg', '04.jpg']);
  }

}
