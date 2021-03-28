import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  rutaImagenes: string = 'assets/heroes/';
  imagenPredeterminada: string = 'assets/no-image.png';

  transform(heroe: Heroe, formato: string = 'jpg'): string {
    if (heroe.id !== '') {
      return `${this.rutaImagenes}${heroe.id}.${formato}`;
    }

    return this.imagenPredeterminada;
  }

}