import { EventEmitter, Injectable, Output } from '@angular/core'
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'
import { UnprocessableEntityError } from 'src/app/shared/errors/unprocessable-entity-error'
import { RegisterFormDTO } from '../register-form-dto'
import { RegisterResponseDTO } from '../register-response-dto'
import { RegisterService } from './register.service'

@Injectable({
    providedIn: 'root'
})

export class RegisterFormService {

    @Output() onUnprocessableEntityError: EventEmitter<UnprocessableEntityError> = new EventEmitter<UnprocessableEntityError>()
    @Output() onSuccess: EventEmitter<RegisterResponseDTO> = new EventEmitter<RegisterResponseDTO>()

    constructor(
        private registerService: RegisterService
    ) {}

    public send(data: RegisterFormDTO): void {
        this.registerService.store(data)
        .pipe(
            catchError(this.onRegisterError.bind(this))
        ).subscribe(
            this.onRegisterSuccess.bind(this)
        )
    }

    protected onRegisterSuccess(res: RegisterResponseDTO): void {
        this.onSuccess.emit(res)
    }

    protected onRegisterError(error: HttpErrorResponse): Observable<never> {
        if(error.status == HttpStatusCode.UnprocessableEntity) {
            this.onUnprocessableEntityError.emit(error.error as UnprocessableEntityError)
        }

        return throwError(() => error)
    }
}
