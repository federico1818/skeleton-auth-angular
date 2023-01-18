import { Component, OnInit } from '@angular/core'
import { RegisterResponseDTO } from 'src/app/register/register-response-dto'
import { RegisterFormService } from 'src/app/register/services/register-form.service'
import { NavigationService } from 'src/app/shared/services/navigation.service'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    constructor(
        private registerFormService: RegisterFormService,
        private navigationService: NavigationService
    ) {}

    public ngOnInit(): void {
        this.registerFormService.onSuccess.subscribe((res: RegisterResponseDTO) => {
            this.navigationService.goToRegisterSuccess(res.data)
        })
    }

}
