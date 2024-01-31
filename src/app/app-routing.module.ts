import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './home/pages/home/home.component'
      ).then((mod) => mod.HomeComponent),
  },
  {
    path: 'rock-paper-scissors',
    loadComponent: () =>
      import(
        './games/pages/rock-paper-scissors/rock-paper-scissors.component'
      ).then((mod) => mod.RockPaperScissorsComponent),
  },
  {
    path: 'games',
    loadComponent: () =>
      import(
        './games/pages/games-overview/games-overview.component'
      ).then((mod) => mod.GamesOverviewComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
