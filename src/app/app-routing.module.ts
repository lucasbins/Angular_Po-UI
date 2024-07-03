import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInventarioComponent } from './lista-inventario/lista-inventario.component';
import { NovoInventarioComponent } from './novo-inventario/novo-inventario.component';
import { DetailInventarioComponent } from './detail-inventario/detail-inventario.component';

const routes: Routes = [
  {path: '', component: ListaInventarioComponent},
  {path: 'novoInventario', component: NovoInventarioComponent},
  {path: 'detalheInventario/:id', component: DetailInventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
