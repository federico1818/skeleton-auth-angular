import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from 'src/app/material/material.module'
import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './pages/register/register.component'
import { RegisterFormComponent } from './components/register-form/register-form.component'


@NgModule({
    declarations: [
        RegisterComponent,
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RegisterRoutingModule,
    ]
})

export class RegisterModule { }
