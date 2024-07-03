import { Component, ViewChild } from '@angular/core';
import { PoDynamicFormComponent, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import {
  PoDynamicFormField,
  PoModalAction
} from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { PoStorageService } from '@po-ui/ng-storage';
import { v4 as uuid } from 'uuid';

interface inventario {
  id: String,
  responsavel: string,
  deposito: string,
  criacao: Date,
  items: Array<any>
}

@Component({
  selector: 'app-novo-inventario',
  templateUrl: './novo-inventario.component.html',
  styleUrls: ['./novo-inventario.component.css']
})

export class NovoInventarioComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent
  @ViewChild('dynamicForm', { static: true }) poForm!: PoDynamicFormComponent
  @ViewChild('dynamicFormItem', { static: true }) poFormItem!: PoDynamicFormComponent

  constructor(
    private router: Router
  ) { }


  poStorageService = new PoStorageService

  newInventario: inventario = {
    id: uuid(),
    responsavel: '',
    deposito: '',
    criacao: new Date(),
    items: []
  }
  newItem = {}

  fieldsInventario: Array<PoDynamicFormField> = [
    {
      property: 'deposito',
      required: true,
      order: 1,
      placeholder: 'Digite o nome do Depósito',
      label: 'Depósito'
    },
    {
      property: 'responsavel',
      required: true,
      order: 2,
      placeholder: 'Digite o nome do Responsável',
      label: 'Responsável'
    }
  ]

  fieldsItemsInventario: Array<PoDynamicFormField> = [
    {
      property: 'item',
      required: true,
      order: 1,
      placeholder: 'Digite o nome do item',
      label: 'Item'
    },
    {
      property: 'localizacao',
      required: true,
      order: 2,
      placeholder: 'Digite a localização do item',
      label: 'Localização'
    },
    {
      property: 'lote',
      required: true,
      order: 3,
      placeholder: 'Digite o lote do item',
      label: 'Lote'
    },
    {
      property: 'quantidade',
      required: true,
      order: 4,
      placeholder: 'Digite a quantidade do item',
      label: 'Quantidade'
    }
  ]

  confirm: PoModalAction = {
    action: () => {
      this.newInventario.items.push(this.newItem)
      this.closeModal()
    },
    label: 'Adicionar Item',
  }

  openModal() {
    this.poFormItem.form.reset()
    this.poModal.open()
  }

  closeModal() {
    this.newItem = {}
    this.poModal.close()
  }

  handleCancel() {
    this.poForm.form.reset()
  }

  handleSave() {
    this.newInventario.criacao = new Date()
    this.poStorageService.appendItemToArray('inventario', this.newInventario).then(() => {
      this.router.navigate(['/'])
    })
  }

  columns: Array<PoTableColumn> = [
    { property: 'item', label: 'Item' },
    { property: 'localizacao', label: 'Localização' },
    { property: 'lote', label: 'Lote' },
    { property: 'quantidade', label: 'Quantidade' }
  ]
}
