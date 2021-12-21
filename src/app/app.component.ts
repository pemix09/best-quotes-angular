import { FormComponent } from './form/form.component';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Najlepsze cytaty";
  quotes: Quotation[] = QUOTES;

  // @ViewChild('form')
  // form: FormComponent;

 

  addVote(quote: Quotation, value: number){
    quote.votes += value;
  }

  bestQuotes(){
    let bests = this.quotes.filter( q => q.votes>0);
    return bests.sort((a: Quotation, b: Quotation) => b.votes - a.votes);
  }
  worstQuotes(){
    let worsts = this.quotes.filter(q => q.votes<0);
    return worsts.sort((a: Quotation, b: Quotation) => a.votes - b.votes);
  }

  onNewQuotation(newQuote: Quotation){
    this.quotes.unshift(newQuote);
  }
}
