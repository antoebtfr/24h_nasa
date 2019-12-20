import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explo-mode',
  templateUrl: './explo-mode.component.html',
  styleUrls: ['./explo-mode.component.css']
})
export class ExploModeComponent implements OnInit {

  routes = [
    {
      name: 'Système Solaire', route: './map1',
      img: 'https://static.lpnt.fr/images/2019/11/15/19714589lpw-19714750-article-jpg_6678583_660x281.jpg'
    },
    {
      name: 'Map Mystère', route: './mystery',
      img : 'http://fitoterapiakalauz.hu/wp-content/uploads/2014/02/kerdojel.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
