
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { backURL } from '../interfaces/data';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private router: Router, private http: HttpClient) {}

  email: string = '';


  onSubmit() {
    console.log('hi')
    this.router.navigate(
      ['/'],
      {'queryParams': {toggleTime: 500}}
    )
  }
}
