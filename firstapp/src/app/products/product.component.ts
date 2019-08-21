import {Component} from '@angular/core';
import { IProduct } from './product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
    // styles: ['thead{color:orange}', 'h4{color:green}' ]
})


export class ProductComponent {
    title: string = 'Product App Nareshit';
    showImage: boolean  = false;
    userInput: string;
    imageWidth = 100;
    serverStatus: string = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    products: IProduct[] = [
        {
            _id: '5a05dacc734d1d68d42d31f3',
            productId: 1,
            productName: 'Leaf Rake',
            productCode: 'GDN-0011',
            releaseDate: 'March 19, 2016',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 3.5,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            _id: '5a05daec734d1d68d42d32ca',
            productId: 2,
            productName: 'Garden Cart',
            productCode: 'GDN-0023',
            releaseDate: 'March 18, 2016',
            description: '15 gallon capacity rolling garden cart',
            price: 32.99,
            starRating: 4.2,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        },
        {
            _id: '5a05db08734d1d68d42d3300',
            productId: 3,
            productName: 'Hammer',
            productCode: 'TBX-0048',
            releaseDate: 'May 21, 2016',
            description: 'Curved claw steel hammer',
            price: 8.9,
            starRating: 2.8,
            imageUrl: 'https://i.ibb.co/TrR7jkM/hammer.png'
        },
        {
            _id: '5a05daec734d1d68d42d32ca',
            productId: 2,
            productName: 'Garden Cart',
            productCode: 'GDN-0023',
            releaseDate: 'March 18, 2016',
            description: '15 gallon capacity rolling garden cart',
            price: 25.99,
            starRating: 2.5,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }
    ];

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
