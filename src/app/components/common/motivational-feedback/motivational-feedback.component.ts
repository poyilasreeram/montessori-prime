import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-motivational-feedback',
    templateUrl: './motivational-feedback.component.html',
    styleUrls: ['./motivational-feedback.component.scss']
})
export class MotivationalFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    motivationFeedbackSlides: OwlOptions = {
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