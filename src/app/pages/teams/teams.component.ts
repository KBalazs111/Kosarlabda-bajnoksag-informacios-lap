import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team.model';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-teams-page',
  imports: [
    NgFor, 
    NgIf, 
    CommonModule, 
    MatCardModule, 
    MatIconModule, 
    MatButtonModule, 
    MatDividerModule,
    MatTooltipModule,
    RouterModule
  ],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsPageComponent {
  teams: Team[] = [];
  
  constructor(private teamService: TeamService) {
    this.teams = this.teamService.getTeams();
  }
}