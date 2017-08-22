import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})

export class SteponeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.name = urlParameters['name'];
      this.points = urlParameters['points'];
    })
  }

  //methods based on decisions
  optionOne() {
    this.points--;
    this.nextStep();
  }
  optionTwo() {
    this.nextStep();
  }

  //method(s) to navigate to next step
  nextStep() {
    this.router.navigate([this.name, this.points, 'step2']);
  }

  name: string;
  points: number;

}
