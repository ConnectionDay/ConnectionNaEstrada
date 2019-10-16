import { Injectable } from "@angular/core";

@Injectable()
export class FotoService {

  public listarFotos(): string[] {
    return ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];
  }

}
