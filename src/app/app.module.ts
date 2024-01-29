import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { FormsModule } from '@angular/forms';
import { WorkshopComponent } from './workshop/workshop.component';
import { TestjaaComponent } from './home/testjaa/testjaa.component';
import { ProjectComponent } from './project/project.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { env } from 'src/env/env';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberComponent,
    ProfileComponent,
    // WorkshopComponent,
    NotfoundComponent,
    TestjaaComponent,
    WorkshopComponent,
    WorkshopComponent,
    ProjectComponent,
    // TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
