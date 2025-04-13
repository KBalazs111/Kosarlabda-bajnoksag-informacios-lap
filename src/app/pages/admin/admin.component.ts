import { Component as AdminComponent } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match.model';
import {  FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@AdminComponent({
  standalone: true,
  selector: 'app-admin-page',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html'
 
})
export class AdminPageComponent {
  form = new FormGroup({
    homeTeam: new FormControl(''),
    awayTeam: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl('')
  });

  constructor(private matchService: MatchService) {}

  submit() {
    this.matchService.addMatch(this.form.value as Match);
    this.form.reset();
  }
}
