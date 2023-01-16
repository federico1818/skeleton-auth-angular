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

    public form: FormGroup = this.fb.group({
        name: ['', Validators.required]
    })

    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    protected send(): void {
        console.log(this.form.value)
    }
}
