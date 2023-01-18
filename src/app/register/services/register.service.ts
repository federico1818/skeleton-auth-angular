import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RegisterFormDTO } from 'src/app/register/register-form-dto'
import { RegisterResponseDTO } from 'src/app/register/register-response-dto'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    constructor(
        private http: HttpClient
    ) {}

    protected url: string = 'http://auth-api.skeleton.test/api'

    public store(data: RegisterFormDTO): Observable<RegisterResponseDTO> {
        return this.http.post<RegisterResponseDTO>(`${ this.url }/register`, data)
    }
}
