import { AbstractControl, ValidationErrors } from "@angular/forms";

//Valid email addresses: testing@gmail.com, testing@gmail.bg, something.else@gmail.com
//Invalid email addresses: qwe@gmail.com, 123@gmail.bg, somethingelse@abv.bg, another@abv.com
export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[a-zA-Z0-9._%+\-]{5,}@gmail\.(com|bg)$/;
    const value = control.value;

    if (!value) {
        return null; 
    }

    return pattern.test(value) ? null : { invalidEmail: true };
}