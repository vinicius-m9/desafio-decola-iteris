import { Component, OnInit } from '@angular/core';
import { SobreCardModel } from 'src/app/services/sobre-card-model';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  public logoUrl = 'https://hospitalsantamonica.com.br/wp-content/uploads/2020/10/viole%CC%82ncia-contra-a-mulher.jpg';
  public titulo = 'Sobre o Amor não machuca';
  public descricao = 'Somos uma plataforma de ajuda as mulheres que sofrem com violência doméstica';

  public cards: Array<SobreCardModel>
  ​
  constructor() {
    this.cards = [];
    const card1 = new SobreCardModel();
    card1.titulo = 'Visão'
    card1.imagem = 'https://paginabrazil.com/wp-content/uploads/2016/11/mulheresfelizes.jpg'
    card1.descricao = 'O Amor não machuca tem como objetivo contribuir e fortalecer mecanismos prevenir a violência doméstica e contra a mulher, para isso, contamos com o apoio da sociedade e de instituições.'
    this.cards.push(card1);

    const card2 = new SobreCardModel();
    card2.titulo = 'Missão'
    card2.imagem = 'https://fesofap.portaliap.org/wp-content/uploads/2020/01/mulher-feliz.png'
    card2.descricao = 'Enfrentar, por meio de mecanismos de conscientização e empoderamento, a violência doméstica e familiar contra a mulher.'
    this.cards.push(card2);

    const card3 = new SobreCardModel();
    card3.titulo = 'Valores'
    card3.imagem = 'https://www.notibras.com/site/wp-content/uploads/2017/03/dia-internacional-da-mulher-1.jpg'
    card3.descricao = 'Ética, Justiça, Honestidade, Transparência.'
    this.cards.push(card3);
   }

  ngOnInit(): void {
  }

}
