import { VariablesGlobales } from './../../variableGlobales';
import { PlaneteService } from './../../shared/planete.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdd-pages',
  templateUrl: './bdd-pages.component.html',
  styleUrls: ['./bdd-pages.component.css']
})
export class BddPagesComponent implements OnInit {
  clicked = false;
  solarSys = [];
  constructor(private _plaServ: PlaneteService, public varGlo: VariablesGlobales) { }

  ngOnInit() {
    this._plaServ.getPlanetsSysSol().subscribe(data => this.solarSys = data);
  }

  clickElement(name, img, bio) {
    this.clicked = !this.clicked;
    this.varGlo.name = name;

    this.varGlo.img = img;
    this.varGlo.bio = bio;
  }
}
