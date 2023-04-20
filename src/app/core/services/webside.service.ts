import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITestimonial } from '../models/testimonial.model';
import { IHeader } from '../models/header.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WebsideService {

  header!: IHeader;

  constructor( private _http: HttpClient) { }

  getTestimonials(): Observable<ITestimonial[]> {
    return this._http.get<ITestimonial[]>('http://localhost:1337/api/testimonials')
  }

  getHeaderInfo(): Observable<IHeader> {
    return this._http.get<IHeader>('http://localhost:1337/api/header')
  }
}
