import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITestimonial } from '../models/testimonial.model';
import { IHeader } from '../models/header.model';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsideService {

  constructor( private _http: HttpClient) { }

  getTestimonials() {
    return this._http.get<ITestimonial[]>('http://localhost:1337/api/testimonials')
  }

  getHeaderInfo() {
    return this._http.get<IHeader>('http://localhost:1337/api/header')
  }
}
