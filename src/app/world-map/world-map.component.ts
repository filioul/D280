import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css'],
  standalone: true
})
export class WorldMapComponent implements OnInit{

  constructor (private apiService:ApiService) {}

  ngOnInit(): void {
    let svgPaths = document.querySelectorAll<SVGPathElement>('path');
    svgPaths.forEach(svgCountry => {

      svgCountry.addEventListener('mouseover', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = 'green';
          this.apiService.getCountryData(svgCountry)
        }
      });
    
      svgCountry.addEventListener('mouseleave', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = '';
        }
      });
    });
  }

  
}