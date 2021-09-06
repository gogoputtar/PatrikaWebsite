import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoupleComponent } from './components/couple/couple.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InviteComponent } from './components/invite/invite.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavbarComponent,
    CoupleComponent,
    EventsComponent,
    GalleryComponent,
    InviteComponent,
    FooterComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
