import { NgModule} from '@angular/core';

import { ProductComponent } from './product.component';
import { MyUpperCasePipe } from './myupper.pipe';
import { MyDiscountPipe } from './discount.pipe';
import { ProductSearchPipe } from './product-search.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductComponent,
        MyUpperCasePipe,
        MyDiscountPipe,
        ProductSearchPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]

})


export class ProductModule {

}
