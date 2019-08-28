import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MySecondComponent } from './mysecond.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    // All Component & Pipe
    declarations: [
        AppComponent,
        MySecondComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent
    ],

    // All Module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule
    ],

    // Only and only main comnponent
    bootstrap: [AppComponent],

    // All Services
    providers: []
})

export class AppModule {

}
