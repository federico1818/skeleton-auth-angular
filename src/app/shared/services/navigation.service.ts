import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { APP_ROUTES } from 'src/app/app-routes'

@Injectable({
    providedIn: 'root'
})

export class NavigationService {
    constructor(
        private _router: Router
    ) {}

    public goToRegisterSuccess(): void {
        this._router.navigate([ APP_ROUTES.REGISTER_SUCCESS ])
    }
}
