import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {
    constructor(
        private fb: FormBuilder
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
        console.log(this.form.value)
    }
}