import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() 
  newQuote = new EventEmitter<Quotation>();

  showForm = false;
  quotation: Quotation = {author: '', quotation: '', votes: 0};

  onSwichForm(){
    this.showForm = !this.showForm;
  }

  addQuotation(){
    this.newQuote.emit(this.quotation);
    this.quotation = {author: '', quotation: '', votes: 0};
  }

  constructor() { }

  ngOnInit() {
  }

}
