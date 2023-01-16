import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

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
        RegisterRoutingModule
    ]
})

export class RegisterModule { }
