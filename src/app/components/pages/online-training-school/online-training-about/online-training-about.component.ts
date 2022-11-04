import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
    selector: 'app-online-training-about',
    templateUrl: './online-training-about.component.html',
    styleUrls: ['./online-training-about.component.scss']
})
export class OnlineTrainingAboutComponent implements OnInit {

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