import { Directive, ElementRef, Host, HostListener, Input, NgModule, OnInit, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';

export class InputMaskModel {
    form?: AbstractControl | null;
    mask?: string;
    len?: number;
    person?: boolean;
    phone?: boolean;
    phoneNotDDD?: boolean;
    money?: boolean;
    percent?: boolean;
    type?: 'alfa' | 'num' | 'all' = 'alfa';
    decimal?: number = 2;
    decimalCaracter?: string = `,`;
    thousand?: string;
    userCaracters?: boolean = false;
    numberAndTousand?: boolean = false;
    moneyInitHasInt?: boolean = true;
}

/** Добавляет возможность добавление маски для полей ввода */
@Directive({
    selector: '[inputmask]',
})
export class InputMaskDirective implements OnInit {
    @Input() inputmask: InputMaskModel = new InputMaskModel();
    @Input() formControlName: string = '';

    /**
     * Event key up in directive
     * @constant {string} value
     */
    @HostListener('keyup', ['$event'])
    inputKeyup(event: any): void {
        const value: string = this.returnValue(event.target.value);
        this.setValueInFormControl(value);
    }
    @HostListener('ngModelChange', ['$event']) onNgModelChange(e: any) {
        const value: string = this.returnValue(e);
        if (value) {
            this.setValueInFormControl(value, false);
        }
    }

    constructor(
        @Optional()
        @Host()
        @SkipSelf()
        private controlContainer: FormGroupDirective,
        private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
        if (!this.inputmask.type) {
            this.inputmask.type = 'all';
        }

        if (!this.inputmask.decimal) {
            this.inputmask.decimal = 2;
        }
        if (this.inputmask.moneyInitHasInt === undefined) {
            this.inputmask.moneyInitHasInt = true;
        }

        if (!this.inputmask.decimalCaracter) {
            this.inputmask.decimalCaracter = ',';
        }
        if (this.controlContainer) {
            if (this.formControlName) {
                this.inputmask.form = this.controlContainer.control.get(this.formControlName);
            } else {
                console.warn('Missing FormControlName directive from host element of the component');
            }
        } else {
            console.warn("Can't find parent FormGroup directive");
        }
        this.initialValue();
    }

    initialValue(): void {
        const value: string = this.returnValue(this.elementRef.nativeElement.value);
        this.setValueInFormControl(value);
    }

    /**
     * The verification of form
     * @example <caption>this.verifyFormControl()</caption>
     * @returns {boolean} return a boolean value
     */
    verifyFormControl(): boolean {
        if (this.inputmask.form instanceof FormControl) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Set Value em FormControl
     * @example <caption>this.setValueInFormControl(string)</caption>
     */
    setValueInFormControl(value: string, emitViewToModelChange?: boolean): void {
        if (!this.verifyFormControl()) {
            this.elementRef.nativeElement.value = value;
            return;
        }
        this.inputmask.form?.setValue(value, { emitViewToModelChange });
        this.inputmask.form?.updateValueAndValidity();
    }

    /**
     * For initial value
     * @example <caption>this.setValueInFormControl(string, model)</caption>
     * @param {string} value
     * @param {InputMaskModel} config
     * @returns {string} mask intial value
     */
    writeCreateValue(value: string, config: InputMaskModel = new InputMaskModel()): string {
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.phoneNotDDD) {
            return this.phoneNotDDDMask(value);
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }

        if (value && config.percent) {
            return this.writeValuePercent(value);
        }

        if (this.inputmask.userCaracters) {
            return this.usingSpecialCharacters(value, this.inputmask.mask, this.inputmask.len);
        }

        if (value && config.mask) {
            this.inputmask.mask = config.mask;
            if (config.len) {
                this.inputmask.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    }

    /**
     * For initial value percent
     * @example <caption>this.writeValuePercent(string)</caption>
     * @param {string} value
     * @returns {string} mask intial value
     */

    writeValuePercent(value: string): string {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    }

    /**
     * For initial value person
     * @example <caption>this.writeValuePerson(string)</caption>
     * @param {string} value
     * @returns {string} mask intial value
     */
    writeValuePerson(value: string): string {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '$1.$2.$3-$4');
        } else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '$1.$2.$3/$4-$5');
        }
    }

    /**
     * For initial value money
     * @example <caption>this.writeValueMoney(string, model)</caption>
     * @param {string} value
     * @param {InputMaskModel} value
     * @returns {string} mask intial value
     */
    writeValueMoney(value: string, config: InputMaskModel = new InputMaskModel()): string {
        return this.moneyMask(value, config);
    }

    /**
     * Here is one of the main functions
     * responsible for identifying the type of mask
     * @example <caption>this.returnValue(string)</caption>
     * @param {string} value
     * @returns {string} mask value
     */
    returnValue(value: string): string {
        if (!this.inputmask.mask) {
            this.inputmask.mask = '';
        }
        if (value) {
            let formValue = value;
            if (this.inputmask.type === 'alfa') {
                formValue = formValue.replace(/\d/gi, '');
            }
            if (this.inputmask.type === 'num') {
                console.log(value);
                
                formValue = formValue.replace(/\D/gi, '');
            }

            if (this.inputmask.money) {
                return this.moneyMask(this.onInput(formValue), this.inputmask);
            }
            if (this.inputmask.phone) {
                return this.phoneMask(formValue);
            }
            if (this.inputmask.phoneNotDDD) {
                return this.phoneNotDDDMask(formValue);
            }
            if (this.inputmask.person) {
                return this.peapollMask(formValue);
            }
            if (this.inputmask.percent) {
                return this.percentMask(formValue);
            }
            if (this.inputmask.numberAndTousand) {
                return this.thousand(formValue);
            }
            if (this.inputmask.userCaracters) {
                return this.usingSpecialCharacters(formValue, this.inputmask.mask, this.inputmask.len);
            }
            return this.onInput(formValue);
        } else {
            return '';
        }
    }

    applyCpfMask(formValue: string) {
        formValue = formValue.replace(/\D/gi, '');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        return formValue;
    }

    applyCnpjMask(formValue: string) {
        formValue = formValue.replace(/\D/gi, '');
        formValue = formValue.replace(/(\d{2})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1/$2');
        formValue = formValue.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
        formValue = formValue.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        return formValue;
    }

    /**
     * Here we have a mask for percentage
     * @example <caption>this.percentMask(string)</caption>
     * @param {string} value
     * @returns {string} string percentage
     */
    private percentMask(value: any): string {
        let tmp = value;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    }

    /**
     * Here we have a mask for phone in 8 digits or 9 digits
     * @example <caption>this.phoneMask(string)</caption>
     * @param {string} value
     * @returns {string} string phone
     */
    private phoneMask(value: any): string {
        let formValue = value;
        if (formValue.length > 14 || formValue.length === 11) {
            this.inputmask.len = 15;
            this.inputmask.mask = '(99) 99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        } else {
            this.inputmask.len = 14;
            this.inputmask.mask = '(99) 9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    }
    /**
     * Here we have a mask for phone in 8 digits or 9 digits not ddd
     * @example <caption>this.phoneMask(string)</caption>
     * @param {string} value
     * @returns {string} string phone
     */
    private phoneNotDDDMask(value: any): string {
        let formValue = value;
        if (formValue.length > 9) {
            this.inputmask.len = 10;
            this.inputmask.mask = '99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        } else {
            this.inputmask.len = 9;
            this.inputmask.mask = '9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    }

    /**
     * Here we have a mask for peapoll ID
     * @example <caption>this.peapollMask(string)</caption>
     * @param {string} value
     * @returns {string} string ID
     */
    private peapollMask(value: any): string {
        let formValue = value;
        if (formValue.length >= 14) {
            if (formValue.length === 14 && formValue.indexOf('-') > 0) {
                this.inputmask.len = 14;
                this.inputmask.mask = '999.999.999-99';
                formValue = this.applyCpfMask(formValue);
            } else {
                this.inputmask.len = 18;
                this.inputmask.mask = '99.999.999/9999-99';
                formValue = this.applyCnpjMask(formValue);
            }
        } else {
            this.inputmask.len = 14;
            this.inputmask.mask = '999.999.999-99';
            formValue = this.applyCpfMask(formValue);
        }
        return this.onInput(formValue);
    }

    /**
     * Here we have a mask for money mask
     * @example <caption>this.moneyMask(string)</caption>
     * @param {string} value
     * @param {InputMaskModel} config
     * @returns {string} string money
     */
    private moneyMask(value: any, config: InputMaskModel): string {
        const decimal: number = config.decimal || this.inputmask.decimal || 0;

        value = value.replace(/\D/gi, '').replace(new RegExp('([0-9]{' + decimal + '})$', 'g'), config.decimalCaracter + '$1');
        if (value.length === 1 && !this.inputmask.moneyInitHasInt) {
            const dec = Array(decimal - 1).fill(0);
            return `0${config.decimalCaracter}${dec.join('')}${value}`;
        }
        if (value.length === decimal + 1) {
            return '0' + value;
        } else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1);
        }
        if (config.thousand && value.length > Number(4) + Number(config.decimal)) {
            const valueOne = `([0-9]{3})${config.decimalCaracter}([0-9]{${config.decimal}}$)`;
            value = value.replace(new RegExp(`${valueOne}`, `g`), `${config.thousand}$1${config.decimalCaracter}$2`);
        }
        if (config.thousand && value.length > Number(8) + Number(config.decimal)) {
            const valueTwo = `([0-9]{3})${config.thousand}([0-9]{3})${config.decimalCaracter}([0-9]{${config.decimal}}$)`;
            value = value.replace(new RegExp(`${valueTwo}`, `g`), `${config.thousand}$1${config.thousand}$2${config.decimalCaracter}$3`);
        }

        return value;
    }

    /**
     * Responsible for returning the empty mask
     * @example <caption>this.onInput(string)</caption>
     * @param {string} value
     * @returns {string} value
     */
    private onInput(value: any): string {
        return this.formatField(value, this.inputmask.mask, this.inputmask.len);
    }

    /**
     * Responsible for special characters
     * @example <caption>this.usingSpecialCharacters(string)</caption>
     * @param {string} field
     * @param {string} mask
     * @param {number} size
     * @returns {string} value
     */
    private usingSpecialCharacters(field: string, mask: string = '', size: number = 0): string {
        if (!size) {
            size = 99999999999;
        }
        let boleanoMascara;
        const exp = /\-|\.|\,| /gi;
        const campoSoNumeros = field.toString().replace(exp, '');
        let posicaoCampo = 0;
        let NovoValorCampo = '';
        let sizeMascara = campoSoNumeros.length;
        for (let i = 0; i < sizeMascara; i++) {
            if (i < size) {
                boleanoMascara = mask.charAt(i) === '-' || mask.charAt(i) === '.' || mask.charAt(i) === ',';
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    sizeMascara++;
                } else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    }

    /**
     * Responsible formating number
     * @example <caption>this.thousand(string)</caption>
     * @param {string} value
     */
    private thousand(value: string): string {
        let val = value.replace(/\D/gi, '');
        const reverse = val.toString().split('').reverse().join('');
        const thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands
                .join(`${this.inputmask.thousand || '.'}`)
                .split('')
                .reverse()
                .join('');
        }
        return '';
    }

    /**
     * Responsible for removing special characters
     * @example <caption>this.formatField(string)</caption>
     * @param {string} field
     * @param {string} mask
     * @param {number} size
     * @returns {string} value
     */
    private formatField(field: string, mask: string = '', size: number = 0): any {
        if (!size) {
            size = 99999999999;
        }
        let boleanoMascara;
        const exp = /\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        const campoSoNumeros = field.toString().replace(exp, '');
        let posicaoCampo = 0;
        let NovoValorCampo = '';
        let TamanhoMascara = campoSoNumeros.length;
        for (let i = 0; i < TamanhoMascara; i++) {
            if (i < size) {
                boleanoMascara = mask.charAt(i) === '-' || mask.charAt(i) === '.' || mask.charAt(i) === '/';
                boleanoMascara = boleanoMascara || mask.charAt(i) === '_';
                boleanoMascara = boleanoMascara || mask.charAt(i) === '(' || mask.charAt(i) === ')' || mask.charAt(i) === ' ';
                boleanoMascara = boleanoMascara || mask.charAt(i) === ',' || mask.charAt(i) === '*' || mask.charAt(i) === '+';
                boleanoMascara = boleanoMascara || mask.charAt(i) === '@' || mask.charAt(i) === '#' || mask.charAt(i) === ':';
                boleanoMascara = boleanoMascara || mask.charAt(i) === '$' || mask.charAt(i) === '&' || mask.charAt(i) === '%';
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    TamanhoMascara++;
                } else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    }
}
@NgModule({
	imports: [],
	declarations: [InputMaskDirective],
	exports: [InputMaskDirective],
})
export class InputMaskDirectiveModule {}