import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: "game-detail/:slug", component: GameDetailComponent, data: { animation: 'GameDetail' } },
  { path: "game-list", component: GameListComponent, data: { animation: 'GameList' } },
  { path: "game-search", component: GameSearchComponent, data: { animation: 'GameSearch' } },
  { path: "game-search/:searchTerm", component: GameSearchComponent, data: { animation: 'null' } },
  { path: "**", redirectTo: "/game-list", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
