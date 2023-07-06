import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface chemicalsType {
    count: number;
    rows: chemicalType[];
}

export interface chemicalType {
  id: string;
  name: string;
  description: string;
  source: string;
  attribution?: string;
  dateModified?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CHEMICAL COMPOUNDS';

  constructor(protected router: Router) {}

  redirectToAddNew() {
    this.router.navigate(['/add-new-chemical']);
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
