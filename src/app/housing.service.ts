import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingLocation } from './housing-location';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  public dataUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getAllHousingLocations(): Promise<HousingLocation[]> {
    return firstValueFrom(
      this.http.get<{ locations: HousingLocation[] }>(this.dataUrl).pipe(
        map(response => response.locations ?? [])  // Ensure an array is returned
      )
    );
  }

  getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    return this.getAllHousingLocations()
      .then(locations => locations.find(location => location.id === id));
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(firstName, lastName, email);
  }
}
