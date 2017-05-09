import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PartyService } from "./shared/party.service";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PartiesComponent } from './parties/parties.component';
import { PartyComponent } from './party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartiesComponent,
    PartyComponent
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
  exports: [ MdButtonModule, MdButtonModule ],
  providers: [PartyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
