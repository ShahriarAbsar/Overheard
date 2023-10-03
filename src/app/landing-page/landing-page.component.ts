import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { backURL } from '../interfaces/data';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  showOverlay = false;
  email: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
   
    setTimeout(() => {
      this.showOverlay = true;
    }, 5000);
  }

  onSubmit() {
    console.log('Email submitted:', this.email);
    this.http.post(`${backURL}email`, {email: this.email}).subscribe(gotit => {
      console.log(gotit);
      this.email = '';
      alert('Thanks we got your email!')
    })
  }

  redir() {
 
    this.router.navigate(['/landing']);
   
  }
  getmail() {
   
    console.log('Email submitted:', this.email);
 
  }
}
