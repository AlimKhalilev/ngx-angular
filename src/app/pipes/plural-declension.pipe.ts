import { Pipe, PipeTransform } from '@angular/core';

/**
 * Позволяет склонять слова во множественном числе.
 */
@Pipe({
    name: 'pluralDeclension'
})
export class PluralDeclensionPipe implements PipeTransform {
    /**
     * Трансфомация числа в слово. Пример использования:
     * {{ 1 | pluralDeclension:['документ', 'документа', 'документов'] }}
     * @param quantity число, которое влияет на склонение.
     * @param titles список склонений (например: ['документ', 'документа', 'документов']).
     */
    transform(quantity: number, titles: string[]) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[quantity % 100 > 4 && quantity % 100 < 20 ? 2 : cases[quantity % 10 < 5 ? quantity % 10 : 5]];
    }
}
