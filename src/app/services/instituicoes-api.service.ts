import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstituicoesApiModel } from './instituicoes-api-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstituicoesApiService {
  private apiUrl: string = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';

  constructor(private http: HttpClient) { }

  public get(): Observable<InstituicoesApiModel[]> {
    return this.http.get<InstituicoesApiModel[]>(this.apiUrl);
  }
}
