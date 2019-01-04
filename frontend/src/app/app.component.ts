 import {Component} from '@angular/core';

// decorador: cargar metadatos o atributos de los componentes,
// metadato: describe a las clases y las relaciones

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGSOCIAL';
  public description = 'curso test';
}
