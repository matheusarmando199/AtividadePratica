import { Component } from '@angular/core';
import { Alunos } from './arquivo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matheus';
  listaAlunos = Alunos;
}
console.log(Alunos)