import { Component, Input } from '@angular/core';
import { WorkshopComponent } from '../workshop.component';


@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
constructor(){
 
}

  name !: string;
  born !: number;
  old !: number;
  @Input() myName!: string;
  currentYear : number = new Date().getFullYear();

}
