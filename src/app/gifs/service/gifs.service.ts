import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGif, ISearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: IGif[] = [];

  private _tagHistory: string[] = [];
  private _apiKey: string = 'pfq4hCc0z5Oe4JBE8BMY9l2fHPRTdTnr';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage()
   }

  get tagHistory() {
    return this._tagHistory;
  }

  private organizeTags( tag: string) {

    tag = tag.toLowerCase();

    //Pregunta si está el elemento en el histoial, si lo está lo remueve
    if ( this._tagHistory.includes(tag) ) {
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);

    this._tagHistory = this._tagHistory.splice(0,10); // limita el arreglo hasta 10

    this.saveTagHistory(this._tagHistory);

  }

  private saveTagHistory( tag: string[]):void {
    localStorage.setItem('history', JSON.stringify(tag));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history') ) return;

    const historyLocalStorage = localStorage.getItem('history');
    this._tagHistory = JSON.parse(historyLocalStorage!)

    if( this._tagHistory.length === 0) return; // Si no hay elementos dentro del localStorage, no precarga nada

    this.searchTag(this._tagHistory[0]) // Si hay un historial, busca el primer elemento y hace una petición automática de ese elemento

  }

  searchTag( tag: string):void {

    if (tag.length === 0) return; // Si al buscar manda un string vacío, no hace nada, ejemplo haga enter todo el tiempo

    const limit: number = 10; // Para mandar el límite de elementos a la api, se podría hacer una lista para o input para ver cuantos elementos quiere pedir

    this.organizeTags( tag );
    const param = new HttpParams() // Esto se manda el http como options
      .set('api_key', this._apiKey)
      .set('q', tag)
      .set('limit', limit)

    this.http.get<ISearchResponse>(`${this._serviceUrl}/search`, {params: param})
    .subscribe( resp => {
      this.gifsList = resp.data
    });


  }
}
