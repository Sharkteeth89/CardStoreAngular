import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CardService } from '../card.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from "../user";



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
  
  registerForm: FormGroup;
  user: User

  roles: Role[] = [
    {value: 'normal', viewValue: 'Normal'},
    {value: 'seller', viewValue: 'Seller'},
    {value: 'admin', viewValue: 'Admin'},
  ]; 

  constructor(private cardService: CardService, private formBuilder: FormBuilder,) { }
  private location: Location
  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
    });
  
  }  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);  
    this.cardService.createUser(this.registerForm.value)
    
  }
}
