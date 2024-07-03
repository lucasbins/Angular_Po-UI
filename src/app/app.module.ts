import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListaInventarioComponent } from './lista-inventario/lista-inventario.component';
import { NovoInventarioComponent } from './novo-inventario/novo-inventario.component';
import { PoStorageModule } from '@po-ui/ng-storage';
import { DetailInventarioComponent } from './detail-inventario/detail-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaInventarioComponent,
    NovoInventarioComponent,
    DetailInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoStorageModule.forRoot({
      driverOrder: ['localstorage']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
