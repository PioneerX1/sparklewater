import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { SteponeComponent } from './stepone/stepone.component';
import { SteptwoComponent } from './steptwo/steptwo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateprofileComponent,
    SteponeComponent,
    SteptwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
