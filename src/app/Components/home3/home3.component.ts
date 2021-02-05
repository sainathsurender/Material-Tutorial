import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() {
    this.profileForm.name_used = "fsdf";
  }

  ngOnInit() {
  }

  profileForm = new Profile();

  submitForm() {
    console.log(this.profileForm);
  }

}

export class Profile {
  constructor(
    public name_used?: string,
    public last_name?: string,
    public first_name?: string,
    public middle_name?: string,
    public status?: string,
    public login_name?: string,
    public email?: string
  ) {}
}
