import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {CreateprofileComponent} from './createprofile/createprofile.component';
import {SteponeComponent} from './stepone/stepone.component';
import {SteptwoComponent} from './steptwo/steptwo.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'createprofile',
    component: CreateprofileComponent
  },
  {
    path: ':name/:points/step1',
    component: SteponeComponent
  },
  {
    path: ':name/:points/:deduct/step2',
    component: SteptwoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
