
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
    console.log('Email submitted:', this.email);
    this.http.post(`${backURL}email`, {email: this.email}).subscribe(gotit => {
      console.log(gotit);
      this.email = '';
      alert('Thanks we got your email!')
    })
  }
}
