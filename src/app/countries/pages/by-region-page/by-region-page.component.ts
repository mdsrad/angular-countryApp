import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region: Country[] = [];
constructor( private countriesService: CountriesService){}

  searchByRegion( term: string):void{
    this.countriesService.searchRegion( term )
    .subscribe( region => {
        this.region = region;
    });
  }

}
