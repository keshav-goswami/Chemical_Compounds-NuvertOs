import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChemicalDataService } from '../service/compounds-data.service';
import { chemicalsType } from '../app.component';

@Component({
  selector: 'app-chemical-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class ChemicalCardsComponent {
  allChemicals: any = [];
  totalLength: any;
  page: number = 1;

  constructor(private router: Router, private service: ChemicalDataService) {
    this.getAll();
  }

  getAll() {
    this.service.getAllChemicals(this.page).subscribe((data: chemicalsType) => {
      this.totalLength = data.count;
      this.allChemicals = data.rows;
    })
    console.log("CHEMICALS: ", this.allChemicals);
  }

  getFullChemicalInfo = (id: string) => {
    const navigationDetails: string[] = ['/compound'];
    navigationDetails.push(id);
    this.router.navigate(navigationDetails);
  }

  onChemicalsDataChange = (event: any) => {
    this.page = event;
    this.getAll();
  }

}
