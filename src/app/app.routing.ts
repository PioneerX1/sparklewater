import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {CreateprofileComponent} from './createprofile/createprofile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'createprofile',
    component: CreateprofileComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
