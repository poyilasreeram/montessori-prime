import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-instructor-quote',
    templateUrl: './instructor-quote.component.html',
    styleUrls: ['./instructor-quote.component.scss']
})
export class InstructorQuoteComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}