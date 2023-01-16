import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { APP_ROUTES } from 'src/app/app-routes'
import { RegisterComponent } from 'src/app/register/pages/register/register.component'

const routes: Routes = [
    {
        path: APP_ROUTES.REGISTER,
        component: RegisterComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
