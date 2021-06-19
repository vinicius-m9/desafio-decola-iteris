import { Component, OnInit, Input } from '@angular/core';
import { DepoimentoModel } from 'src/app/services/depoimento-model';

@Component({
  selector: 'app-depoimento-card',
  templateUrl: './depoimento-card.component.html',
  styleUrls: ['./depoimento-card.component.css']
})
export class DepoimentoCardComponent implements OnInit {

  @Input() depoimento: DepoimentoModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
