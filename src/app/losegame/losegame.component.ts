import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-losegame',
  templateUrl: './losegame.component.html',
  styleUrls: ['./losegame.component.css']
})
export class LosegameComponent implements OnInit {

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
  }

  restart() {
    this.router.navigate(['']);
  }

}
