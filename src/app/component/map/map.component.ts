import { Component, OnInit, AfterViewInit } from '@angular/core';
import { readSync } from 'fs';
import * as L from 'leaflet'
import { MarkerService } from '../../services/marker.service'
import { ShapeService } from '../../services/shape.service'


//importing leaflet marker to local, edit in angular.json
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map
  states
  constructor(
    private markerService: MarkerService,
    private shapeService: ShapeService
  ) { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    this.initMap()
    this.markerService.plotCapital(this.map)
    this.shapeService.showOutline().subscribe((res) => {
      for (let e of res.features) {
        console.log(e)
        this.states = e.properties.STATE
      }
    })
    this.drawShape() 
  }
  private initMap(): void {
    // map initiation with certain center and zoomlevel
    this.map = L.map('map', { //'map' is id of the map that is injected in the html component
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    //importing base layer from osm
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    
  }

  private drawShape(){
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      })
    });

    this.map.addLayer(stateLayer);
  }
  
}
