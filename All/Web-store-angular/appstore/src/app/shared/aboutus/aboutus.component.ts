import { Component, OnInit } from '@angular/core';
import { moveIn } from '../router.animation';
import { fallIn } from '../router.animation';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn': '' }
})
export class AboutusComponent implements OnInit {

  state: string = '';

  constructor() { }

  ngOnInit() {
  }

}
