import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showPopup(data: any){ 
    return `` +
    `<div>State: ${data.state}</div>
    <div>Capital: ${data.capital}</div>
    <div>Population: ${data.population}</div>`
  }
}
