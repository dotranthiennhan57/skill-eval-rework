import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailValidators{
    //This is standard for No spaces Validators
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace : true};
        return null;
    }

    static containInfodatEmail(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).includes('@infodatinc.com'))
            return null;
        return {containInfodatEmail : true};
    }
}