import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/game-list", pathMatch: "full"},
  { path: "game-detail/:slug", component: GameDetailComponent },
  { path: "game-list", component: GameListComponent },
  { path: "game-search", component: GameSearchComponent },
  { path: "game-search/:searchTerm", component: GameSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
