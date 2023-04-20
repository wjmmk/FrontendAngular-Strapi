import { Component, OnInit } from '@angular/core';
import { ITestimonial } from '../core/models/testimonial.model';
import { WebsideService } from '../core/services/webside.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testimonials!: ITestimonial[];
  title!: string;
  description!: string;

  constructor( private _websideService: WebsideService) { }

  ngOnInit() {
     this.getHeaderInfo();
     this.getTestimonials();
  }

  getHeaderInfo() {
    this._websideService.getHeaderInfo().subscribe(
      (resp: any) => {
        const {title, description} = resp.data.attributes
        this.title = title;
        this.description = description;
      } 
    );
  }

  getTestimonials() {
    this._websideService.getTestimonials().subscribe(
      (resp: any) => { this.testimonials = resp.data }
    );
  }
}
