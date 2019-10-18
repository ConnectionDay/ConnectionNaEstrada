import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './view/ap-card-component.html',
  styleUrls: ['./view/ap-card-component.scss']
})
export class CardComponent {

  @Input() rota: string;
  @Input() icone: string;

  constructor(private router: Router) {  }

  navegarParaPagina(): void {
    this.router.navigate([this.rota]);
  }
}
