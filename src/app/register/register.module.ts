import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from 'src/app/material/material.module'
import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './pages/register/register.component'
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterSuccessComponent } from './pages/register-success/register-success.component'


@NgModule({
    declarations: [
        RegisterComponent,
        RegisterFormComponent,
        RegisterSuccessComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RegisterRoutingModule,
    ]
})

export class RegisterModule { }
