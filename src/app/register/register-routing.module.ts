import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { APP_ROUTES } from 'src/app/app-routes'

const routes: Routes = [
    {
        path: '',
        redirectTo: APP_ROUTES.REGISTER,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RegisterRoutingModule { }
