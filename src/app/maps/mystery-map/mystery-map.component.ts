import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystery-map',
  templateUrl: './mystery-map.component.html',
  styleUrls: ['./mystery-map.component.css']
})
export class MysteryMapComponent implements OnInit {

  modIsOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggleMod() {
    this.modIsOpen = !this.modIsOpen;
    console.log(this.modIsOpen);
  }

}
