import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { LoginComponent }           from "./login/login.component";
import { PartiesComponent }         from "./parties/parties.component";
import { PartyComponent }           from "./party/party.component";
import { PartyGiftsComponent }      from "./party-gifts/party-gifts.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'parties',  component: PartiesComponent },
  { path: 'party/:uuid', component: PartyComponent }
  { path: 'party-gifts/:id', component: PartyGiftsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
