import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { chemicalsType, chemicalType } from '../app.component';

export interface ChemicalsDataResponse {
  count: number;
  data: chemicalsType;
}

export interface ChemicalDataResponse {
  count: number;
  data: chemicalType[];
}

@Injectable({
  providedIn: 'root',
})
export class ChemicalDataService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllChemicals(page: number) {
    return this.http
      .get<ChemicalsDataResponse>(`${this.baseURL}/compounds/${page}`)
      .pipe(map((res) => res.data));
  }
  getThisChemical(id: string) {
    return this.http
      .get<ChemicalDataResponse>(`${this.baseURL}/compound/${id}`)
      .pipe(map((res) => res.data));
  }
  updateChemical(data: any) {
    const id = data.id;
    return this.http.patch(`${this.baseURL}/update/${id}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
  deleteChemical(id: string) {
    return this.http.delete(`${this.baseURL}/delete/${id}`, {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
  addNewChemical(data: any) {
    return this.http.post(`${this.baseURL}/create`, data, {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
}
