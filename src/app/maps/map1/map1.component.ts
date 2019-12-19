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
  constructor(private _plaServ: PlaneteService) { }

  ngOnInit() {
    this._plaServ.getPlanets()
    .subscribe( data => this.planets = data );
  }

  toggleModal() {
    this.modalIsOpen = !this.modalIsOpen;
  }

}
