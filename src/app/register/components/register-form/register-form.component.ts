import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { RegisterService } from 'src/app/register/services/register.service'
import { UnprocessableEntityError } from 'src/app/shared/errors/unprocessable-entity-error'

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {
    constructor(
        private fb: FormBuilder,
        private registerService: RegisterService
    ) {}

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
            catchError((error: HttpErrorResponse) => {
                if(error.status == HttpStatusCode.UnprocessableEntity)
                    this.setErrors(error.error)
                return throwError(() => error)
            })
        ).subscribe(data => {
            console.log(data)
        })
    }

    protected setErrors(error: UnprocessableEntityError): void {
        console.log(error)
    }
}
