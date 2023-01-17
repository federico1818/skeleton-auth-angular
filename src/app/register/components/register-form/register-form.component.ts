import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { RegisterService } from 'src/app/register/services/register.service'
import { NavigationService } from 'src/app/shared/services/navigation.service'
import { UnprocessableEntityError } from 'src/app/shared/errors/unprocessable-entity-error'

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {
    constructor(
        private fb: FormBuilder,
        private registerService: RegisterService,
        private navigationService: NavigationService
    ) {}

    public messages: any = {}
    public sending: boolean = false
    public form: FormGroup = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        password_confirmation: ['', Validators.required]
    })

    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    protected send(): void {
        this.sending = true
        this.form.disable()
        this.registerService.store(this.form.value)
        .pipe(
            catchError(this.onError.bind(this))
        ).subscribe(
            this.onSuccess.bind(this)
        )
    }

    protected onSuccess(data: any): void {
        console.log(data)
        this.navigationService.goToRegisterSuccess()
    }

    protected onError(error: HttpErrorResponse): Observable<never> {
        this.form.enable()
        this.sending = false

        if(error.status == HttpStatusCode.UnprocessableEntity)
            this.onUnprocessableEntityError(error.error as UnprocessableEntityError)

        return throwError(() => error)
    }

    protected onUnprocessableEntityError(error: UnprocessableEntityError): void {
        this.setFormErrors(error)
    }

    protected setFormErrors(error: UnprocessableEntityError): void {
        Object.getOwnPropertyNames(error.errors.validators).forEach((property: string) => {
            const validator = Object.getOwnPropertyNames(error.errors.validators[property])[0].toLowerCase()
            this.messages[property] = { [validator]: error.errors.messages[property][0] }
            this.form.controls[property].setErrors({
                [validator]: true
            })
        })
    }
}
