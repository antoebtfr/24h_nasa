import { VariablesGlobales } from './../../variableGlobales';
import { PlaneteService } from './../../shared/planete.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css']
})
export class Map1Component implements OnInit {

  modalIsOpen = false;
  planets = [];
  constructor(private _plaServ: PlaneteService, public varGlo: VariablesGlobales) { }

  ngOnInit() {
    this._plaServ.getPlanetsSysSol()
      .subscribe(data => this.planets = data);
    this.planetHover();
    this.planetLeave();
  }

  toggleModal(name, img, bio) {
    this.modalIsOpen = !this.modalIsOpen;
    this.varGlo.name = name;
    this.varGlo.img = img;
    this.varGlo.bio = bio;
  }

  planetHover() {
    document.getElementById('spaceship').addEventListener('mouseover', () => {
      let result;
      result = document.getElementsByClassName('planet');
      for (const div of result) {
        div.style.backgroundColor = 'blue';
      }
      console.log(result);
    });
  }
  planetLeave() {
    document.getElementById('spaceship').addEventListener('mouseout', () => {
      let result;
      let i = 0;
      result = document.getElementsByClassName('planet');
      for (const div of result) {
        div.style.backgroundColor = '';
        i++;
      }
      console.log(result);
    });
  }

}
