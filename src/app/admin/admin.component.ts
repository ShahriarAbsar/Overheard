import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backURL } from '../interfaces/data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  authenticated: boolean = false;
  password!: string;
  emails: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get(`${backURL}email`).subscribe(gotit => {
        this.emails = gotit;
      })
  }

  onVerify() {
    if (this.password === 'abcd1234') {
      this.authenticated = !this.authenticated;
      console.log('1');
    }
    console.log(2)
  }
}
