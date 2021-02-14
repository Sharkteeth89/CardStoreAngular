import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from "../user";
import { first } from 'rxjs/operators';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css'],
})
export class RegisterUsersComponent implements OnInit {
  
  user:User = <User>{email:"", password:"", role:"", username:""};

  form: any = {
    username: null,
    email: null,
    password: null,
    role:null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  

  roles: Role[] = [
    {value: 'normal', viewValue: 'Normal'},
    {value: 'professional', viewValue: 'Professional'},
    {value: 'admin', viewValue: 'Admin'},
  ]; 

  constructor(private cardService: CardService) { }
  ngOnInit() {  
  }  

  onSubmit() {
    const { username, email, password, role } = this.form;

    console.log(email,username,password,role);

    this.user.email = email;
    this.user.password = password;
    this.user.username = username;
    this.user.role = role;
    
    this.cardService.registerUser(this.user).subscribe(data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    });
  }
}
