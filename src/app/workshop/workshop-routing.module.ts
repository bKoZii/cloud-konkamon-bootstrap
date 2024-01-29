import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { MemberComponent } from '../member/member.component';
import { WorkshopComponent } from './workshop.component';

const routes: Routes = [
  { path: '', component:WorkshopComponent},
  // {path: '', redirectTo: 'twowaybinding',pathMatch: 'full'},
  {path:'twowaybinding', component: TwowaybindingComponent},
  {path:'form', component: MemberComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
