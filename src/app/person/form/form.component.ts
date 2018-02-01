import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PersonService } from "../person.service";
import { Person } from "../person";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private action: string;
  private person = new Person();
  constructor(private service: PersonService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.getQueryParams();
  }

  submitForm(){
    if(this.person.id){
      this.updatePerson(this.person);
    } else {
      this.addPerson(this.person);
    }
  }

  addPerson(person){
    this.service.save(person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  updatePerson(person){
    this.service.update(person).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  addPhone(phoneForm){
    this.person.telefones.push(phoneForm.value);
    phoneForm.reset();
  }

  deletePhone(index){
    this.person.telefones.splice(index,1);
  }

  findById(id){
    this.service.findById(id).subscribe(response => {
      this.person = response;
    });
  }

  getQueryParams(){
    this.route.queryParams.subscribe(params => {
      let id = params.id;

      if(id){
        this.action = 'Editar';
        this.findById(id);
      } else {
        this.action = 'Adicionar';
      }
    });
  }
}
