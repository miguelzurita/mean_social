import {Component} from '@angular/core';

// template: ``,

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent {
  public nombre: string;
  public mejorJuego: string;
  public mejor_juego_retro: string;
  public mostrar_retro: boolean;
  public color: string;

  public videojuegos: Array<string>;

  constructor() {
    this.nombre = 'Video Juego';
    this.mejorJuego = 'LOL';
    this.mejor_juego_retro = 'Super mario 64';
    this.mostrar_retro = true;
    this.color = '#ff00ff';

    this.videojuegos = [
      'Los simpons', 'Assian Creed', 'Call of duty', 'Tekken'
    ];
  }
}
