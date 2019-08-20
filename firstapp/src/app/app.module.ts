import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MySecondComponent } from './mysecond.component';
import { ProductComponent } from './products/product.component';
import { MyUpperCasePipe } from './products/myupper.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/product-search.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
    // All Component & Pipe
    declarations: [
        AppComponent,
        MySecondComponent,
        ProductComponent,
        MyUpperCasePipe,
        MyDiscountPipe,
        ProductSearchPipe,
        StarComponent
    ],

    // All Module
    imports: [
        BrowserModule,
        FormsModule
    ],

    // Only and only main comnponent
    bootstrap: [AppComponent],

    // All Services
    providers: []
})

export class AppModule {

}
