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
  
  registerForm: FormGroup;
  user: User;
  

  roles: Role[] = [
    {value: 'normal', viewValue: 'Normal'},
    {value: 'seller', viewValue: 'Seller'},
    {value: 'admin', viewValue: 'Admin'},
  ]; 

  constructor(private cardService: CardService, private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router) { }
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
    console.warn(JSON.stringify(this.registerForm.value));  
    console.warn();  
    this.cardService.createUser(JSON.stringify(this.registerForm.value));
  }
}
