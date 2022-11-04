import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-kitchen-feedback-funfacts',
    templateUrl: './kitchen-feedback-funfacts.component.html',
    styleUrls: ['./kitchen-feedback-funfacts.component.scss']
})
export class KitchenFeedbackFunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    kitchenFeedbackSlides: OwlOptions = {
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}