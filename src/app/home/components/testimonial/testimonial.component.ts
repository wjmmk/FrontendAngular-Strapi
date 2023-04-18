import { Component, Input, OnInit } from '@angular/core';
import { ITestimonial } from 'src/app/core/models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  @Input() testimonial!: ITestimonial;

  constructor() { }

  ngOnInit(): void {
  }

}
