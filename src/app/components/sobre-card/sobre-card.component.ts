import { Component, Input, OnInit } from '@angular/core';
import {SobreCardModel} from 'src/app/services/sobre-card-model'

@Component({
  selector: 'app-sobre-card',
  templateUrl: './sobre-card.component.html',
  styleUrls: ['./sobre-card.component.css']
})
export class SobreCardComponent implements OnInit {

  @Input() sobre : SobreCardModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
