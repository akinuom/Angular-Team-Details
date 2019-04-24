import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {

  member: any;
  teamName: any;
  memberName: any;
  sub: any;
  roster: any;
  memberObj: any;
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.memberName = params.name;
      this.data.getContentJSON().subscribe(data => {
        for (let i = 0; i < data.teams.length; i++) {
          this.roster = data.teams[i].roster;
          for (let j = 0; j < this.roster.length; j++) {
            if (this.memberName === this.roster[j].person.displayName) {
              this.teamName = data.teams[i].name;
              this.member = this.roster[j];
            }
          }
        }
      });
    });
  }
  save(details): void {
    console.log(details);
    this.router.navigate([`/team-members/${this.teamName}`]);
  }
  goBack() {
    this.router.navigate([`/team-members/${this.teamName}`]);
  }
}
