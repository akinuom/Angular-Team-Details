import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  persons: any = [];
  id: any;
  sub: any;
  size: any;



  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params.idVar;
      this.data.getContentJSON().subscribe(data => {
        this.size = (data.teams).length;
        for (let i = 0; i < this.size; i++) {
          if (this.id === (data.teams)[i].name) {
            this.persons = (data.teams)[i].roster;
                 }
        }

        this.persons = this.persons.sort(this.sortByProperty('position'));
        this.persons = this.persons.sort(this.sortByProperty('depthOrder'));

      });
    });
  }
  sortByProperty = (property) => {
    return (x, y) => {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
  };

  getDetails(name) {
    this.router.navigate(['/edit-member', name ]  );
  }

}
