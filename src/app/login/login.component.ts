import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TokenStorageService } from '../token-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.openSnackBar();    
    if (this.tokenStorage.getToken() != null) {
      this.router.navigate(['/dashboard']);
    }    
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.userService.login(username, password).subscribe(
      data => {
        if(data!='700' && data!='600'){
          this.tokenStorage.saveToken(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
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

  openSnackBar() {
    this.snackBar.open("Log in please", "OK", {
      duration: 2000,
    });
  }

}
