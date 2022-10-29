import { Component, OnInit } from '@angular/core';
import { menunobossData } from './menunoboss-data';

@Component({
  selector: 'app-menunoboss',
  templateUrl: './menunoboss.component.html',
  styleUrls: ['./menunoboss.component.scss']
})
export class MenunobossComponent implements OnInit {

  collapsed = true;
  menunoboss = menunobossData;

  menuToogle(clickEvent?:MouseEvent) {
    this.collapsed = !this.collapsed;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
