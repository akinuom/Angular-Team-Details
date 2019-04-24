import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  constructor(
    private data: DataService,
    public router: Router) { }

  // tslint:disable-next-line: ban-types
  teams: Object;

  ngOnInit() {
    this.data.getContentJSON().subscribe(data => {
      this.teams = data.teams;
      console.log(this.teams);
    });
  }
  getData(idVar: any) {
    console.log(idVar);
    this.router.navigate(['/team-members', idVar ]  );
  }
}

