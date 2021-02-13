import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];


  constructor(private cardService: CardService) {}
 

  //Similar to viewDidLoad or onCreate
  ngOnInit() {
  this.getCards();
}

getCards(): void {
  this.cardService.getCards().subscribe(cards => this.cards = cards);
}

}
