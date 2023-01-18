import { User } from "src/app/shared/models/user"

export interface RegisterResponseDTO {
    'app-name': string
    data: User
    message: string
}
