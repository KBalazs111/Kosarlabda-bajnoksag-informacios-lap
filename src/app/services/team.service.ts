import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
    { id: 1, name: 'Falco', city: 'Szombathely' },
    { id: 2, name: 'Alba Fehérvár', city: 'Székesfehérvár' }
  ];

  getTeams(): Team[] {
    return this.teams;
  }
}
