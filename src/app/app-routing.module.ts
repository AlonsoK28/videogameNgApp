import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoNuevoComponent } from './producto-nuevo/producto-nuevo.component';
import { ProductoBusquedaComponent } from './producto-busqueda/producto-busqueda.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/listado-productos", pathMatch: "full"},
  { path: "listado-productos", component: ProductosComponent },
  { path: "detalle-producto/:slug", component: ProductoDetalleComponent },
  { path: "game-detail/:slug", component: GameDetailComponent },
  { path: "agregar-producto", component: ProductoNuevoComponent },
  { path: "busqueda", component: ProductoBusquedaComponent },
  { path: "game-search", component: GameSearchComponent },
  { path: "game-search/:searchTerm", component: GameSearchComponent },
  { path: "busqueda/:termino", component: ProductoBusquedaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
