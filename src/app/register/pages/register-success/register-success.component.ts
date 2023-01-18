import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { User } from 'src/app/shared/models/user'
import { NavigationService } from 'src/app/shared/services/navigation.service'

@Component({
    selector: 'app-register-success',
    templateUrl: './register-success.component.html',
    styleUrls: ['./register-success.component.scss']
})

export class RegisterSuccessComponent {
    public user!: User

    constructor(
        private _router: Router,
        private _navigationService: NavigationService
    ) {
        if(!this._router.getCurrentNavigation()?.extras.state) {
            this._navigationService.goToRegister()
            return
        }

        this.user = this._router.getCurrentNavigation()?.extras.state!['user'] as User
    }
}
