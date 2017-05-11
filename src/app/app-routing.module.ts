import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {PartiesComponent} from "./parties/parties.component";
import {PartyComponent} from "./party/party.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'parties',  component: PartiesComponent },
  { path: 'party/:uuid', component: PartyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
