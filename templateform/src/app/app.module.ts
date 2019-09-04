import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormsComponent } from './customer-forms/customer-forms.component';
import { FormPosterService } from './services/form-poster.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormPosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
