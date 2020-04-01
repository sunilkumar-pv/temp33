import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 interface Person {
  id: number,
  name: string,
  location: string
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
   person = [];
  getPerson<Person>(){
   return this.http.get('http://localhost:3000/person').subscribe( respsone => {
     console.log(respsone);
   })
  }

}
