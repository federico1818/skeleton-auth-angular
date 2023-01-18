import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RegisterFormService } from 'src/app/register/services/register-form.service'
import { UnprocessableEntityError } from 'src/app/shared/errors/unprocessable-entity-error'
import { RegisterResponseDTO } from '../../register-response-dto'

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private registerFormService: RegisterFormService
    ) {}

    private _isSending: boolean = false
    public messages: any = {}
    public form: FormGroup = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        password_confirmation: ['', Validators.required]
    })

    public ngOnInit(): void {
        this.registerFormService.onSuccess.subscribe(this.onSuccess.bind(this))
        this.registerFormService.onUnprocessableEntityError.subscribe(this.onUnprocessableEntityError.bind(this))
    }

    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    public get isSending(): boolean {
        return this._isSending
    }

    protected send(): void {
        this.sending()
        this.registerFormService.send(this.form.value)
    }

    protected sending(): void {
        this._isSending = true
        this.form.disable()
    }

    protected stop(): void {
        this._isSending = false
        this.form.enable()
    }

    public onSuccess(): void {
        this.stop()
    }

    public onUnprocessableEntityError(error: UnprocessableEntityError): void {
        this.stop()
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
