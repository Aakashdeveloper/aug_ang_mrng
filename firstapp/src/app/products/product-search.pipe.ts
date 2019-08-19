import { Pipe, PipeTransform} from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'productsearch'
})

export class ProductSearchPipe implements PipeTransform {
    transform(value: IProduct[], userInput: string) {
        userInput = userInput ? userInput.toLowerCase() : null ;
        return userInput ? value.filter((product) =>
            (product.productName.toLowerCase().indexOf(userInput) !== -1)
        ) : value;
    }
}


/*
const ages = [32, 33, 16, 40];
ages.filter((age) => { return age >= 18 })}
*/
