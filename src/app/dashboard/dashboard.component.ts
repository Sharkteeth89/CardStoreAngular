import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { TokenStorageService } from '../token-storage.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken() != null) {
      this.getCards();
    }else{
      this.router.navigate(['/login']);
    }        
  }

  ngOnDestroy(): void{
    this.reloadPage();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards.slice(0, 5));
  }

  logOut(){    
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }

  
  
}