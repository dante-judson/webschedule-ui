import { Component, OnInit } from '@angular/core';
import { PersonService } from "../person.service";
import { Person } from "../person";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private persons : Person[] =[];
  private today = new Date();

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons(){
    this.service.listAll().subscribe(response => {
      this.persons = response._embedded.persons;
    })
  }

  deletePerson(id){
    this.service.delete(id).subscribe(() => {
      this.getAllPersons();
    });
  }

  getIdadeFromData(dataNascimento){
    dataNascimento = new Date(dataNascimento);
    
    let today = new Date();
    let idade = today.getFullYear() - dataNascimento.getFullYear();

    dataNascimento.setFullYear(today.getFullYear());

    if(dataNascimento > today){
      idade --;
    } 

    return idade;
  }

}
