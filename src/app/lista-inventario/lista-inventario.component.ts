import { Component, AfterViewInit } from '@angular/core';
import { PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { PoStorageService } from '@po-ui/ng-storage';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css']
})
export class ListaInventarioComponent implements AfterViewInit {
  items: Array<any> = []

  poStorageService = new PoStorageService

  onClick() {
    alert('Po Button!');
  }

  poTableActions: Array<PoTableAction> = [

  ]


  columns: Array<PoTableColumn> = [
    { property: 'id', label: 'ID' },
    { property: 'criacao', label: 'Criação', type: 'date', format: 'dd/MM/yyyy' },
    { property: 'deposito', label: 'Depósito' },
    { property: 'responsavel', label: 'Responsável' },
  ]

  ngAfterViewInit(): void {
    this.poStorageService.get('inventario').then((res) => this.items = res)
  }
}
