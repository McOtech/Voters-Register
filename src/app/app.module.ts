import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JQ_TOKEN } from './services/jquery.service';
import { Toastr, TOASTR_TOKEN } from './services/toastr.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MembersComponent } from './members/members.component';

const jQuery = window['$'];
const toastr: Toastr = window['toastr'];

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    MyProfileComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  	{
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
