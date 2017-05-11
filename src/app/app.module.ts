import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PartyService } from "./shared/party.service";
import { MockPartyService } from "./mocks/mock-party.service";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PartiesComponent } from './parties/parties.component';
import { PartyComponent } from './party/party.component';
import { PartyGiftsComponent } from './party-gifts/party-gifts.component';
import { UserService } from "./shared/user.service";
import { PartiesMenuComponent } from './parties-menu/parties-menu.component';
import { PartyMenuComponent } from './party-menu/party-menu.component';
import { MenuComponent } from './menu/menu.component';

let MOCKING : boolean = false;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartiesComponent,
    PartyComponent,
    PartyGiftsComponent,
    PartiesMenuComponent,
    PartyMenuComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    MdInputModule,
    MdButtonModule,
    AppRoutingModule
  ],
  exports: [
    MdButtonModule,
    MdButtonModule
  ],
  providers: [
    { provide: PartyService, useClass: MOCKING ? MockPartyService : PartyService },
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
