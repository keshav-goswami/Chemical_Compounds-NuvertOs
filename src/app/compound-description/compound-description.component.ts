import { Component } from '@angular/core';
import { ChemicalDataService } from '../service/compounds-data.service'
import { ActivatedRoute, Router } from '@angular/router';
import { chemicalType } from '../app.component';

@Component({
  selector: 'app-full-chemical-info',
  templateUrl: './compound-description.component.html',
  styleUrls: ['./compound-description.component.css']
})
export class FullChemicalInfoComponent {
  info: any;
  isEditable = true;
  constructor(private route: ActivatedRoute, 
    private service: ChemicalDataService,
    private router: Router
    ) {
    const id = route.snapshot.paramMap.get('id') as string
    service.getThisChemical(id).subscribe((data: chemicalType[]) => {
      this.info = data;
      console.log(this.info.name);
    })
  } 
  
  getFormData(data: any) {
    const finalData = {
      id: this.info.id,
      ...data
    }
    this.service.updateChemical(finalData).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  deleteChemical() {
    this.service.deleteChemical(this.info.id).subscribe((data) => {
      console.log('deleted', data);
      this.router.navigate(['/']);
    })
  }

  makeEditable() {
    this.isEditable = false;
  }

}
