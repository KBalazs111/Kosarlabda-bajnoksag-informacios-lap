import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match.model';
import { MatchCardComponent } from '../../shared/match-card.component';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [NgFor, AsyncPipe, MatchCardComponent],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomePageComponent implements OnInit {
  matches: any; 
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matches = this.matchService.getMatches();
  }
}
