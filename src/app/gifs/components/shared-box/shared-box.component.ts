import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-shared-box',
  template: `
  <h5 class="text-bold">Buscar</h5>
  <input type="text"
  name="search"
  placeholder="Buscar gifs..."
  class="my-3 p-1 w-full border border-solid rounded"
  (keyup.enter)="searchTag()"
  #inputSearch
  >

  `
})
export class SharedBoxComponent {

  constructor(private gifsService: GifsService){}

  @ViewChild('inputSearch')
  public tagSearch!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newSearch = this.tagSearch.nativeElement.value

    this.gifsService.searchTag(newSearch)
    this.tagSearch.nativeElement.value = ''
  }

}
