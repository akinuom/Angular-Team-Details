import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { DataService } from './data.service';
import { TeamMembersComponent } from './team-members/team-members.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamMembersComponent,
    EditMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
