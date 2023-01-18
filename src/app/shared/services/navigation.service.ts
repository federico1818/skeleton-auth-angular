import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { APP_ROUTES } from 'src/app/app-routes'
import { User } from 'src/app/shared/models/user'

@Injectable({
    providedIn: 'root'
})

export class NavigationService {
    constructor(
        private _router: Router
    ) {}

    public goToRegister(): void {
        this._router.navigate([ APP_ROUTES.REGISTER ])
    }

    public goToRegisterSuccess(user: User): void {
        this._router.navigate([ APP_ROUTES.REGISTER_SUCCESS ], { state: { user: user }})
    }
}
