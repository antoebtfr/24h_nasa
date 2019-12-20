import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystery-map',
  templateUrl: './mystery-map.component.html',
  styleUrls: ['./mystery-map.component.css']
})
export class MysteryMapComponent implements OnInit {

  modIsOpen = true;
  endIsOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMod() {
    this.modIsOpen = !this.modIsOpen;
    this.endIsOpen = true;
    setTimeout(() => {
      document.getElementById('end').style.opacity = '1';
    }, 6000);
  }

}
