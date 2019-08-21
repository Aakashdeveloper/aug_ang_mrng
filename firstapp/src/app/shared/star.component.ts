import { Component, OnChanges, OnInit,
    OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges, OnInit {
    starWidth: number;
    @Input() rating: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        console.log('>>>>> in constructor');
    }

    ngOnChanges(): void {
        console.log('>>>>> in ngOnChanges');
        this.starWidth = this.rating * 86 / 6;
    }

    ngOnInit(): void {
        console.log('>>>>> in ngOnInit');
    }

    ngOnDestory(): void {
        console.log('>>>>> in ngOnDestory');
    }

    onStar(): void {
        this.ratingClicked.emit(`The Rating Clicked is ${this.rating}`);
    }

}
