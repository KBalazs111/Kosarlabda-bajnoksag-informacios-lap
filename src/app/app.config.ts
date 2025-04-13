import { provideRouter } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { TeamsPageComponent } from './pages/teams/teams.component';
import { ProfilePageComponent } from './pages/profile/profile.component';
import { AdminPageComponent } from './pages/admin/admin.component';
import { LoginPageComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomePageComponent },
      { path: 'teams', component: TeamsPageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'admin', component: AdminPageComponent, canActivate: [authGuard] },
      { path: 'login', component: LoginPageComponent }
    ])
  ]
};
