import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
	selector: 'app-courses-details-style-one',
	templateUrl: './courses-details-style-one.component.html',
	styleUrls: ['./courses-details-style-one.component.scss']
})
export class CoursesDetailsStyleOneComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {}

    settings = {
        counter: false,
        plugins: [lgVideo]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

}