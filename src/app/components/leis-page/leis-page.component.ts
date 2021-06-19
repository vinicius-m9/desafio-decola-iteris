import { Component, OnInit } from '@angular/core';
import { LeisApiService } from 'src/app/services/leis-api.service';
import { LeisApiModel } from 'src/app/services/leis-api-model';

@Component({
  selector: 'app-leis-page',
  templateUrl: './leis-page.component.html',
  styleUrls: ['./leis-page.component.css']
})
export class LeisPageComponent implements OnInit {

  listaDeLeis: LeisApiModel[] = [];

  constructor(public leisApiModel: LeisApiService) { }

  ngOnInit(): void {
    this.leisApiModel.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeLeis = retornoDaApi;
      }
    });
  }

}
