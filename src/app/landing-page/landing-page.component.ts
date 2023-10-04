import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  sent: boolean = false;

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['toggleTime']) {
        setTimeout(() => {
          this.showOverlay = true;
        }, params['toggleTime']);
      } else {
        setTimeout(() => {
          this.showOverlay = true;
        }, 5000);
      }
    })
  }

  onSubmit() {
    console.log('Email submitted:', this.email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(this.email)) {
      this.http.post(`${backURL}email`, {email: this.email}).subscribe(gotit => {
        console.log(gotit);
        this.email = 'Thank you for joining Overhead!';
        this.sent = !this.sent;
      });
    } else {
      alert('Give a valid email')
    }
  }

  redir() {
    this.router.navigate(['/landing']);
  }

  getmail() {
   
    console.log('Email submitted:', this.email);
 
  }
}
