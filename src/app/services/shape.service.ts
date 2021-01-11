import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  outline = '/assets/data/outline.geojson'
  constructor(private http: HttpClient) { }

  showOutline(): Observable<any>{
    return this.http.get(this.outline)
  }


}
