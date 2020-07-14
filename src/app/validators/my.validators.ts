import { ValidatorFn, AbstractControl} from '@angular/forms';
import {qoutereplace} from '../utils/quotereplace.utils';


export function jsonParseValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any } => {

    let isValid = true;
    try {
      JSON.parse(qoutereplace(control.value))
    } catch (error) {
      isValid = false;
    }

    return isValid ? null : {
      jsonParse: true
    }
  }

}