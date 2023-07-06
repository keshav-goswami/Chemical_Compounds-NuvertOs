import { Component } from '@angular/core';
import { ChemicalDataService } from '../service/compounds-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-chemical',
  templateUrl: './add-compound.component.html',
  styleUrls: ['./add-compound.component.css']
})
export class AddNewChemicalComponent {
  newChemical:any;
  constructor(private service:ChemicalDataService,private router: Router) {}

  addNewChemical(data: any) {
    const body = {
      ...data,
      id: Math.floor(Math.random()*10000000),
      dateModified: new Date(),
    }
    this.service.addNewChemical(body).subscribe((data) =>{
      this.router.navigate(['/'])
    } )
  }

}
