import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person } from "./person";
import { enviroment } from "../env";

@Injectable()
export class PersonService {

  private serviceURL = enviroment.personServiceUrl;

  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get<any>(this.serviceURL);
  }

  save(person: Person){
    return this.http.post<Person>(this.serviceURL,person);
  }

  delete(id:number){
    return this.http.delete<Person>(`${this.serviceURL}/${id}`);
  }

  update(person:Person){
    return this.http.put<Person>(`${this.serviceURL}/${person.id}`,person);
  }

  findById(id:number){
    return this.http.get<Person>(`${this.serviceURL}/${id}`);
  }

}
