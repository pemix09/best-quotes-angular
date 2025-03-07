import { Quotation } from './../models/quotation';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent{

  @Input()
  quotes: Quotation[];

  @Input()
  title: string;

}
