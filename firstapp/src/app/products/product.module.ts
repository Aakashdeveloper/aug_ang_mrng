import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperCasePipe } from './myupper.pipe';
import { MyDiscountPipe } from './discount.pipe';
import { ProductSearchPipe } from './product-search.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'product/:id', component: ProductDetailComponent}
        ])
    ],
    declarations: [
        ProductComponent,
        MyUpperCasePipe,
        MyDiscountPipe,
        ProductSearchPipe,
        ProductDetailComponent,
        StarComponent
    ],
    providers: [
        ProductService
    ]

})


export class ProductModule {

}
