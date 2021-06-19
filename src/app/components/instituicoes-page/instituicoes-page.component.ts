import { Component, OnInit } from '@angular/core';
import { InstituicoesApiModel } from 'src/app/services/instituicoes-api-model';
import { InstituicoesApiService } from 'src/app/services/instituicoes-api.service';
@Component({
  selector: 'app-instituicoes-page',
  templateUrl: './instituicoes-page.component.html',
  styleUrls: ['./instituicoes-page.component.css']
})
export class InstituicoesPageComponent implements OnInit {

  listaInstituicoes: InstituicoesApiModel[] = [];

  constructor(public instituicaoApi: InstituicoesApiService) { }

  ngOnInit(): void {
    this.instituicaoApi.get().subscribe({
      next: (retornoInstituicoesApi) => {
        this.listaInstituicoes = retornoInstituicoesApi;
      }
    })
  }

}
