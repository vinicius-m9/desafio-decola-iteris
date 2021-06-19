import { Component, OnInit, Input } from '@angular/core';
import { LeisApiModel } from 'src/app/services/leis-api-model';

@Component({
  selector: 'app-lei-card',
  templateUrl: './lei-card.component.html',
  styleUrls: ['./lei-card.component.css']
})
export class LeiCardComponent implements OnInit {

  @Input() lei: LeisApiModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
