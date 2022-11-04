import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-four',
    templateUrl: './feedback-style-four.component.html',
    styleUrls: ['./feedback-style-four.component.scss']
})
export class FeedbackStyleFourComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    coachingFeedbackSlides: OwlOptions = {
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}