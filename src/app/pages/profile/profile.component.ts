import { Component as ProfileComponent } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@ProfileComponent({
  standalone: true,
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule],
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html'
})
export class ProfilePageComponent {
  form = new FormGroup({
    name: new FormControl('Játékos'),
    email: new FormControl('jatek@kosar.hu')
  });
}
