import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  public logoUrl = 'https://hospitalsantamonica.com.br/wp-content/uploads/2020/10/viole%CC%82ncia-contra-a-mulher.jpg';
  public titulo = 'Sobre o Amor não machuca';
  public descricao = 'Somos uma plataforma de ajuda as mulheres que sofrem com violência doméstica';
  public visao = 'O Amor não machuca tem como objetivo contribuir e fortalecer mecanismos prevenir a violência doméstica e contra a mulher, para isso, contamos com o apoio da sociedade e de instituições'
  public missao = 'Enfrentar, por meio de mecanismos de conscientização e empoderamento, a violência doméstica e familiar contra a mulher.'
  public valores = 'Ética, Justiça, Honestidade, Transparência'

  public fotovisao = 'https://paginabrazil.com/wp-content/uploads/2016/11/mulheresfelizes.jpg'
  public fotomissao = 'https://fesofap.portaliap.org/wp-content/uploads/2020/01/mulher-feliz.png'
  public fotovalores = 'https://www.notibras.com/site/wp-content/uploads/2017/03/dia-internacional-da-mulher-1.jpg'

  public titulovisao = 'Visão'
  public titulomissao = 'Missão'
  public titulovalores = 'Valores'


  ​
  constructor() { }

  ngOnInit(): void {
  }

}
