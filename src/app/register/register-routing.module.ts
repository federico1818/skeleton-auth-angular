import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { APP_ROUTES } from 'src/app/app-routes'
import { RegisterComponent } from 'src/app/register/pages/register/register.component'
import { RegisterSuccessComponent } from 'src/app/register/pages/register-success/register-success.component'


const routes: Routes = [
    {
        path: APP_ROUTES.REGISTER,
        component: RegisterComponent
    },
    {
        path: APP_ROUTES.REGISTER_SUCCESS,
        component: RegisterSuccessComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RegisterRoutingModule { }
