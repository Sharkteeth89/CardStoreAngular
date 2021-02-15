import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-create-new-card',
  templateUrl: './create-new-card.component.html',
  styleUrls: ['./create-new-card.component.css']
})
export class CreateNewCardComponent implements OnInit {

  form: any = {
    card_name: null,
    card_description: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private cardService: CardService, private tokenStorage: TokenStorageService,) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    this.reloadPage();
  }

  onSubmit(): void {
    const { card_name, card_description } = this.form;
    
    this.cardService.createCard(card_name, card_description).subscribe(
      data => {
        if(data!='700' && data!='600'){
          console.warn(data);      
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //this.reloadPage();
        }        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
