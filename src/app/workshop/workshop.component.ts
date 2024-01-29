import { Component, OnInit } from '@angular/core';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  isMainWorkshopRoute() {
    return this.router.url === '/workshop';
  }
}
