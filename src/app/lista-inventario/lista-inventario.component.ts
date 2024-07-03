import { Component, AfterViewInit } from '@angular/core';
import { PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { PoStorageService } from '@po-ui/ng-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css']
})
export class ListaInventarioComponent implements AfterViewInit {
  constructor(
    private router : Router
  ) {}

  items: Array<any> = []

  poStorageService = new PoStorageService

  onClick() {
    alert('Po Button!');
  }

  handleEdit(e: any){
    this.router.navigateByUrl('detalheInventario/' + e.id)
  }

  handleDelete(e: any){
    console.log(e)
  }

  poTableActions: Array<PoTableAction> = [
    {
      icon: 'po-icon-edit',
      label: 'Editar',
      action: this.handleEdit.bind(this),
    },
    {
      icon: 'po-icon-delete',
      label: 'Remover',
      action: this.handleDelete.bind(this)
    }
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
