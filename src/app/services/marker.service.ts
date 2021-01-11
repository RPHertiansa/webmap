import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet'
import { PopupService } from './popup.service'

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = '/assets/data/map.geojson'; //locally importing data

  constructor(
    private http: HttpClient,
    private popupservice: PopupService //injecting service to service
  ) {}

  plotCapital(map: L.map){
    this.http.get(this.capitals).subscribe((res: any) => {
      console.log(res)
      for(let e of res.features){
        let lon = e.geometry.coordinates[0] //plotting coordinate data to map 
        let lat = e.geometry.coordinates[1]
        let marker = L.marker([lat, lon]).addTo(map)
        marker.bindPopup(this.popupservice.showPopup(e.properties)) //binding popup data to marker
        marker.addTo(map)
      }
    })
  }
}