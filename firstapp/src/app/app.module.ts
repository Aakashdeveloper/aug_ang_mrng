import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MySecondComponent } from './mysecond.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All Component & Pipe
    declarations: [
        AppComponent,
        MySecondComponent,
        ProductComponent
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
