import {Component, OnInit} from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
    // styles: ['thead{color:orange}', 'h4{color:green}' ]
})


export class ProductComponent implements OnInit {
    title: string = 'Product App Nareshit';
    showImage: boolean  = false;
    userInput: string;
    imageWidth = 100;
    serverStatus: string = 'Offline';

    constructor(private productService: ProductService) {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    products: IProduct[];

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe((data) => this.products = data);
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

    onDataRecive(recivemessage: string): void {
        this.title = 'Product App Nareshit ' + recivemessage;
    }
}

/*
const ages = [32, 33, 16, 40];
ages.filter((age) => { return age >= 18 })}
*/
