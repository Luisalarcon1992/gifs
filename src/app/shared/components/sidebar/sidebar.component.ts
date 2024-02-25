import { Component } from '@angular/core';
import { IGif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  get loadTags() {

    return this.gifsService.tagHistory
  }

  searchTag( tag: string) {
    this.gifsService.searchTag(tag)

  }


}
