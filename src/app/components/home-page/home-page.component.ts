import { Component, OnInit } from '@angular/core';
import { DepoimentoModel } from 'src/app/services/depoimento-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public depoimentos: Array<DepoimentoModel> = [
    new DepoimentoModel('Mariana', 25,
      'Eu via aquilo como um príncipe, “ele está cuidado de mim”. Começou a ser cada vez mais abusivo, senha de rede social, onde eu ia tinha que pedir pra ele, chegou a um ponto que a roupa que eu ia colocar tinha que pedir para ele – recorda.'),
    new DepoimentoModel('Joice', 47,
      'Ele era uma pessoa supertranquila, vivia tocando violão, cantando, só que ele tinha umas manias esquisitas. Era extremamente egoísta, o que era dele era dele, o que era meu, era dele. Não era de elogiar, não gostava de sair, sempre muito quieto – descreve o ex-companheiro.'),
    new DepoimentoModel('Roberta', 34,
      'Tem hora que não tenho vontade de fazer nada, e às vezes eu choro. Ele está preso, mas está lá, enxergando, lendo, escrevendo e eu estou aqui, presa em vida.')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
