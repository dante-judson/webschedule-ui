import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "primeng/primeng";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { PersonRoutingModule } from "./person.module.routing";
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { PersonService } from "./person.service";

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    RouterModule,
    HttpClientModule,
    FormsModule,

    PersonRoutingModule
  ],
  declarations: [ListComponent, FormComponent],
  providers: [PersonService]
})
export class PersonModule { }
