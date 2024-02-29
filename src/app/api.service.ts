import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    http: HttpClient
    ) { }

    async fetchCountryData(svgCountry: SVGPathElement) {
      let api: string = 'https://api.worldbank.org/V2/country/'+svgCountry.id+'?format=json';
      let res: Response = await fetch(api);
      let data: any =  await res.json();
      let dataPath: any = data[1];
      console.log(dataPath[0]);

      let CountryInfo: string[]=[];

      CountryInfo.push(dataPath[0].name);
      CountryInfo.push(dataPath[0].capitalCity);
      CountryInfo.push(dataPath[0].region.value);
      CountryInfo.push(dataPath[0].incomeLevel.value);
      CountryInfo.push(dataPath[0].latitude);
      CountryInfo.push(dataPath[0].longitude);

      return CountryInfo
  }

    async getCountryData(svgCountry: SVGPathElement){

      let CountryInfo: string[] = await this.fetchCountryData(svgCountry);
      
      
      let name : string = CountryInfo[0];
      document.getElementById('name')!.innerText = name;
    
      let capital: string = CountryInfo[1];
      document.getElementById('capital')!.innerText = capital;
    
      let region: string = CountryInfo[2];
      document.getElementById('region')!.innerText = region;
    
      let income: string = CountryInfo[3];
      document.getElementById('income')!.innerText = income;
    
      let latitude: string = CountryInfo[4];
      document.getElementById('latitude')!.innerText = latitude;
    
      let longitude: string = CountryInfo[5];
      document.getElementById('longitude')!.innerText = longitude;
    }
}