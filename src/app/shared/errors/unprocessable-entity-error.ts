export interface UnprocessableEntityError {
    errors: {
        messages: any,
        validators: any
    }
    message: string
}
