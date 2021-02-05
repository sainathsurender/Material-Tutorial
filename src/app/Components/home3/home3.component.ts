import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  issueForm = new FormGroup({
    name_used: new FormControl(),
    last_name: new FormControl(),
    first_name: new FormControl(),
    middle_name: new FormControl(),
    status: new FormControl(),
    login_name: new FormControl(),
    email: new FormControl()
 });

  submitForm() {
    console.log(this.issueForm.value);
  }

}
