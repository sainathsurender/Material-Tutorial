import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [Home2Component],
  imports: [
    CommonModule,
    Home2RoutingModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class Home2Module { }
