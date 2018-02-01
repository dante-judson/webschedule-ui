import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'form', component: FormComponent }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class PersonRoutingModule { }
