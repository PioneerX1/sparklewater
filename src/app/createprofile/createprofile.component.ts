import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../profile.model';


@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(name: string) {
    var newProfile: Profile = new Profile(name);
    this.beginGame(newProfile);
  }

  beginGame(myProfile: Profile) {
    //dynamically create link with name and points left and next step
    this.router.navigate([myProfile.name, myProfile.points, 'step1']);
  }

}
