import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../models/match.model';
import { CommonModule, NgIf } from '@angular/common';  
import { MatchDatePipe } from '../shared/match-date.pipe';
import { MatCardModule } from '@angular/material/card';


@Component({
  standalone: true,
  selector: 'app-match-card',
  imports: [CommonModule, MatchDatePipe, NgIf, MatCardModule],
  template: `
  <mat-card class="match-card">
    <mat-card-title>{{ match.homeTeam }} vs {{ match.awayTeam }}</mat-card-title>
    <mat-card-subtitle>{{ match.date | matchDate }}</mat-card-subtitle>
    <mat-card-content>
      <p>Helyszín: {{ match.location }}</p>
      <p *ngIf="match.score">Eredmény: {{ match.score }}</p>
    </mat-card-content>
    <mat-card-actions *ngIf="isAdmin">
      <button mat-button color="warn" (click)="deleteMatch.emit(match.id)">Törlés</button>
    </mat-card-actions>
  </mat-card>
  `,
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent {
  @Input() match!: Match;
  @Input() isAdmin: boolean = false;
  @Output() deleteMatch = new EventEmitter<number>();
}
