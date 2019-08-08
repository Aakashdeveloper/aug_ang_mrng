import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MySecondComponent } from './mysecond.component';

@NgModule({
    // All Component & Pipe
    declarations: [
        AppComponent,
        MySecondComponent
    ],

    // All Module
    imports: [
        BrowserModule
    ],

    // Only and only main comnponent
    bootstrap: [AppComponent],

    // All Services
    providers: []
})

export class AppModule {

}
