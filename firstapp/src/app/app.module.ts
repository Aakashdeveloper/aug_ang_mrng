import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MySecondComponent } from './mysecond.component';
import { ProductComponent } from './products/product.component';
import { MyUpperCasePipe } from './products/myupper.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/product-search.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

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
        FormsModule,
        HttpClientModule
    ],

    // Only and only main comnponent
    bootstrap: [AppComponent],

    // All Services
    providers: [
        ProductService
    ]
})

export class AppModule {

}
