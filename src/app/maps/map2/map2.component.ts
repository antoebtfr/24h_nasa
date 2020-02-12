import { PlaneteService } from './../../shared/planete.service';
import { VariablesGlobales } from './../../variableGlobales';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css']
})
export class Map2Component implements OnInit {
  modalIsOpen = false;
  planets = [];

  constructor(private _planeteService: PlaneteService, public varGlo: VariablesGlobales) { }

  ngOnInit() {
    this._planeteService.getPlanetOutMilkWay().subscribe(data => this.planets = data);
  }

  toggleModal(name, img, bio) {
    this.modalIsOpen = !this.modalIsOpen;
    this.varGlo.name = name;
    this.varGlo.img = img;
    this.varGlo.bio = bio;
  }
}
