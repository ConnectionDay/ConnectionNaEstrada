import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { LinkMenu } from './models/link-menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './view/toolbar.component.html',
  styleUrls: ['./view/toolbar.component.scss']
})
export class ToolbarComponent {

  public linkMenus = [
    {
      descricao: 'Início',
      rota: 'inicio'
    },
    {
      descricao: 'Palestras',
      rota: 'palestras'
    }
  ] as LinkMenu[];

  constructor(private router: Router) {
  }

  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }

}
