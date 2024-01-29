import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MemberComponent } from './member/member.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'member', component: MemberComponent, data: { title: 'Member' } },
  // { path: 'workshop', component: WorkshopComponent,  data:{title:'Workshop'} },
  { path: 'project', component: ProjectComponent, data: { tile: 'Project' } },
  {
    path: 'workshop', component: WorkshopComponent, children: [
      { path: '', loadChildren: () => import('./workshop/workshop.module').then(m => m.WorkshopModule) }, { path: '**', component: NotfoundComponent }]
  },
  { path: '**', component: NotfoundComponent, data: { title: 'ERROR: 404' } }
  // { path: '**', loadComponent:() =>import('./notfound/notfound.component').then(c => c.NotfoundComponent)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
