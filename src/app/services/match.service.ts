
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Match } from '../models/match.model';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private matches = new BehaviorSubject<Match[]>([
    {
      id: 1,
      homeTeam: 'Falco',
      awayTeam: 'Alba Fehérvár',
      date: '2025-04-20',
      location: 'Szombathely',
      score: '89-76'
    }
  ]);

  getMatches(): Observable<Match[]> {
    return this.matches.asObservable();
  }

  addMatch(match: Match): void {
    const current = this.matches.value;
    const newMatch = { ...match, id: current.length + 1 };
    this.matches.next([...current, newMatch]);
  }

  deleteMatch(id: number): void {
    const updated = this.matches.value.filter(m => m.id !== id);
    this.matches.next(updated);
  }
}
