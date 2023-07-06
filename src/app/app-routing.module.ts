import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullChemicalInfoComponent } from './compound-description/compound-description.component';
import { ChemicalCardsComponent } from './cards/cards.component';
import { AddNewChemicalComponent } from './add-compound/add-compound.component';

const routes: Routes = [
  {
    path:'',
    component: ChemicalCardsComponent
  },
  {
    path: 'chemical/:id',
    component: FullChemicalInfoComponent
  },
  {
    path: 'add-new-chemical',
    component: AddNewChemicalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
