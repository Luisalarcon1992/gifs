import { Component, Input, OnInit } from '@angular/core';
import { IGif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    if( !this.gif ) throw new Error('Method not implemented.');
  }

  @Input()
  public gif!: IGif;



}
