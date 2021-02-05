import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home3RoutingModule } from './home3-routing.module';
import { Home3Component } from './home3.component';

import { MatFormFieldModule,MatInputModule,MatButtonModule, MatOptionModule, MatSelectModule } from "@angular/material";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [Home3Component],
  imports: [
    CommonModule,
    Home3RoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class Home3Module { }
