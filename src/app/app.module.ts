import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './presentation/shared/shared.module';
import { PagesModule } from './presentation/pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, SharedModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
