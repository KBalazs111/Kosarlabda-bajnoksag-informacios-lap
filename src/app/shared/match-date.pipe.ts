import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'matchDate'
})
export class MatchDatePipe implements PipeTransform {
  transform(value: string): string {
    return new Date(value).toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
