import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Najlepsze cytaty";
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = {author: '', quotation: '', votes: 0};

  onSwichForm(){
    this.showForm = !this.showForm;
  }

  addQuotation(){
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '', quotation: '', votes: 0};
  }

  addVote(quote: Quotation, value: number){
    quote.votes += value;
  }

  bestQuotes(){
    return this.quotes.filter( q => q.votes>0);
  }
  worstQuotes(){
    return this.quotes.filter(q => q.votes<0);
  }
}
