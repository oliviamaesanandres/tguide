import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from './place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {


  private url: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  //para ma specify yung value ng header ng hhtp req
  //set content type

  
  constructor( private http:HttpClient ) { }
  


  getPlaces():Observable<Place[]>{
    return this.http.get<Place[]>(
      this.url + "/place"
    );
  }

  addPlace(student:Place):Observable<any>{ //any
    return this.http.post<any>( //any din dito
        this.url + "/place",
        student,

        { headers:this.headers }
    );
  }


  updatePlace(student:Place, id:string):Observable<Place>{
    return this.http.put<Place>(
      this.url + '/place/' + id,
      student,{
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        })
    });
  }

  deletePlace(id:string){
    return this.http.delete(
      this.url + '/place/' + id);
  }
}




