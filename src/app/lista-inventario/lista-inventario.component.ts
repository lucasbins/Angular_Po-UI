import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css']
})
export class ListaInventarioComponent {
  items: Array<any> = []

  onClick() {
    alert('Po Button!');
  }

  columns: Array<PoTableColumn> = [
    { property: 'id', label: 'ID' },
    { property: 'criacao', label: 'Criação', type: 'date', format: 'dd/MM/yyyy'},
    { property: 'deposito', label: 'Depósito'},
    { property: 'responsavel', label: 'Responsável'},
  ]
}
