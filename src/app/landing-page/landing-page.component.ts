import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  showOverlay = false;
  email = '';

  constructor(private router: Router) {}

  ngOnInit() {
   
    setTimeout(() => {
      this.showOverlay = true;
    }, 5000);
  }

  onSubmit() {
   
    console.log('Email submitted:', this.email);
 
  }
  redir() {
 
    this.router.navigate(['/landing']);
   
  }
  getmail() {
   
    console.log('Email submitted:', this.email);
 
  }
}
