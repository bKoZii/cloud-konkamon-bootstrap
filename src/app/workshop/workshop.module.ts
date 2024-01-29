import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TwowaybindingComponent
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    FormsModule,
  ]
})
export class WorkshopModule { }
