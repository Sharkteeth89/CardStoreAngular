import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { TokenStorageService } from '../token-storage.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];


  constructor(private cardService: CardService, private tokenStrorage: TokenStorageService, private router: Router) {}
 

  //Similar to viewDidLoad or onCreate
  ngOnInit() {

    if (this.tokenStrorage.getToken() != null) {
      this.getCards();
    }else{
      this.router.navigate(['/login']);
    }
  this.getCards();
  }

  ngOnDestroy(): void{
    this.reloadPage();
  }

  getCards(): void {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
  }

  reloadPage(): void {
    window.location.reload();
  }

}
