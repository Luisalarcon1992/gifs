import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { IGif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(private gifsService: GifsService){}

  get gifs(): IGif[] {
    return this.gifsService.gifsList
  }
}
