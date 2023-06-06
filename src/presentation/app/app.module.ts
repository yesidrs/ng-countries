import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CapitalsPageComponent } from './pages/capitals-page/capitals-page.component';

@NgModule({
  declarations: [AppComponent, CapitalsPageComponent],
  imports: [AppRoutingModule, BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
