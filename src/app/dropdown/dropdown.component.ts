import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  roles: Role[] = [
    {value: 'normal-0', viewValue: 'Normal'},
    {value: 'seller-1', viewValue: 'Seller'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
