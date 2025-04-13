import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .container {
      padding: 1rem;
      max-width: 960px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent {}
