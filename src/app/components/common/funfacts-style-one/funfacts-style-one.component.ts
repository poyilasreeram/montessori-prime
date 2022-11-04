import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-funfacts-style-one',
    templateUrl: './funfacts-style-one.component.html',
    styleUrls: ['./funfacts-style-one.component.scss']
})
export class FunfactsStyleOneComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}