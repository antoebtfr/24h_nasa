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
  switchCount = 0;
  name = 'Systeme solaire';
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

  // Je suis désolé HUGO, je suis fatigué

  switch() {
    if (this.switchCount % 2 === 0) {
      document.getElementById('solar-system').style.opacity = '0';
      document.getElementById('name').style.opacity = '0';
      setTimeout(() => {
        this._plaServ.getPlanetOutMilkWay().subscribe(data => this.solarSys = data);
        document.getElementById('solar-system').style.opacity = '1';
        document.getElementById('name').style.opacity = '1';
        this.switchCount++;
        this.name = 'Hors - Voie lactée';
      }, 2000);
    } else {
      document.getElementById('solar-system').style.opacity = '0';
      document.getElementById('name').style.opacity = '0';
      setTimeout(() => {
        this._plaServ.getPlanetsSysSol().subscribe(data => this.solarSys = data);
        document.getElementById('solar-system').style.opacity = '1';
        document.getElementById('name').style.opacity = '1';
        this.switchCount++;
        this.name = 'Systeme solaire';
      }, 2000);
    }

  }
}
