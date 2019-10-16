import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-social',
  templateUrl: './view/btn-social.component.html',
  styleUrls: ['./view/btn-social.component.scss']
})
export class BtnSocialComponent {

  @Input() diretorioImagem: string;
  @Input() url: string;
  @Input() nomeRede: string;

}
