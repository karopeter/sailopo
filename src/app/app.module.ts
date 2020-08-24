import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffshoreComponent } from './offshore/offshore.component';
import { CardComponent } from './card/card.component';
import { FeaturesComponent } from './features/features.component';
import { ProComponent } from './pro/pro.component';
import { BoatComponent } from './boat/boat.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    OffshoreComponent,
    CardComponent,
    FeaturesComponent,
    ProComponent,
    BoatComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
