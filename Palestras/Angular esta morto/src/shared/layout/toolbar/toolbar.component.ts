import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './view/toolbar.component.html',
  styleUrls: ['./view/toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private router: Router) {
  }

  irParaInicio() {
    this.router.navigate(['inicio']);
  }

}
