import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './token-storage.service';  
import jwt_decode from "jwt-decode";
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CardStore';

  isNotLoggedIn = true;
  isLoggedIn = false;
  isAdmin = false;

  decodedUser: any = {
    id: null,
    role: null 
  }

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    const token = this.tokenStorage.getToken();
    if (token != null) {
      this.isNotLoggedIn = false;
      this.isLoggedIn = true;
      this.decodedUser = jwt_decode(token);
      if (this.decodedUser.role == "admin") {
        this.isAdmin = true;
      }
    }else{
      this.isNotLoggedIn = true;
      this.isLoggedIn = false;
    }
  }

  logOut(){    
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

  reloadPage(): void {
    window.location.reload();
  }  
}
