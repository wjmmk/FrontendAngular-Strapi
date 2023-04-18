import { Component, OnInit } from '@angular/core';
import { ITestimonial } from '../core/models/testimonial.model';
import { IHeader } from '../core/models/header.model';
import { Observable } from 'rxjs';
import { WebsideService } from '../core/services/webside.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testimonials$!: Observable<ITestimonial[]>;
  headerInfo$!: Observable<IHeader>;

  constructor( private _websideService: WebsideService) { }

  ngOnInit(): void {
    this.headerInfo$ = this._websideService.getHeaderInfo();
    this.testimonials$ = this._websideService.getTestimonials();
  }

}
