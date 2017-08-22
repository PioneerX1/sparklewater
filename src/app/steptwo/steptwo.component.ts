import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.css']
})
export class SteptwoComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.name = urlParameters['name'];
      this.points = parseInt(urlParameters['points']);
      this.deduct = (urlParameters['deduct']);
      this.checkScore();
    })
  }

  checkScore() {
    if (this.points === 0) {
      this.router.navigate(['losegame']);
    } else { }
  }

  name: string;
  points: number;
  deduct: boolean;


}
