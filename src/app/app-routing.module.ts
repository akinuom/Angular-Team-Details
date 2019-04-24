import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamsComponent } from './teams/teams.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'team-members/:idVar', component: TeamMembersComponent },
  { path: 'edit-member/:name', component: EditMemberComponent },

  { path: '',  component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
