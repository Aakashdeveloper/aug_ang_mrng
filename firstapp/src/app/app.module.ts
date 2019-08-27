import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MySecondComponent } from './mysecond.component';
import { StarComponent } from './shared/star.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/product.module';

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
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ])
    ],

    // Only and only main comnponent
    bootstrap: [AppComponent],

    // All Services
    providers: []
})

export class AppModule {

}
