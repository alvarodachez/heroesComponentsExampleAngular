import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() arrHeroes;
  @Output() heroePreferido = new EventEmitter<string>();

nombreHeroePreferido :string;

  constructor() { }

  ngOnInit(): void {
    
  }

  meGusta(heroe):void{
    this.nombreHeroePreferido = heroe.nombre;
    this.heroePreferido.emit(this.nombreHeroePreferido);
  }

}

