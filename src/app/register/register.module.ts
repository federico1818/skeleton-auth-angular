import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './pages/register/register.component';
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
        RegisterRoutingModule
    ]
})

export class RegisterModule { }
