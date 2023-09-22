import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isbnValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isbnPattern = /^[0-9]{10,13}$/;
    if (control.value && !isbnPattern.test(control.value)) {
      return { invalidISBN: 'The ISBN is invalid. It should have between 10 and 13 numeric digits.' };
    }
    return null;
  };
}