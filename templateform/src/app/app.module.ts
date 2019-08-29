import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormsComponent } from './customer-forms/customer-forms.component';
import { TestpipePipe } from './services/testpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormsComponent,
    TestpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
