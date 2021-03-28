import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  infoHeroe(id: string): void {
    this.heroesService.infoHeroe(id)
      .subscribe(heroe => this.heroe = heroe);
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => this.infoHeroe(id));

    // Tambien se puede hacer de esta manera
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(({id}) => this.heroesService.infoHeroe(id))
    //   )
    //   .subscribe(heroe => this.heroe = heroe);
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
