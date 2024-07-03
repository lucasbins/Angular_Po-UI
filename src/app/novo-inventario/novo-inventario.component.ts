import { Component, ViewChild } from '@angular/core';
import { PoDynamicFormComponent, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import {
  PoDynamicFormField,
  PoModalAction
} from '@po-ui/ng-components';
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
      placeholder: 'Nome do Depósito',
      label: 'Depósito'
    },
    {
      property: 'responsavel',
      required: true,
      order: 2,
      placeholder: 'Nome do Responsável',
      label: 'Responsável'
    }
  ]

  fieldsItemsInventario: Array<PoDynamicFormField> = [
    {
      property: 'item',
      required: true,
      order: 1,
      placeholder: 'Nome do item',
      label: 'Item'
    },
    {
      property: 'localizacao',
      required: true,
      order: 2,
      placeholder: 'Localização do Item',
      label: 'Localização'
    },
    {
      property: 'lote',
      required: true,
      order: 3,
      placeholder: 'Número do lote',
      label: 'Lote'
    },
    {
      property: 'quantidade',
      required: true,
      order: 4,
      placeholder: 'Quantidade',
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
      console.log(this.newInventario)
    })
  }

  columns: Array<PoTableColumn> = [
    { property: 'item', label: 'Item' },
    { property: 'localizacao', label: 'Localização' },
    { property: 'lote', label: 'Lote' },
    { property: 'quantidade', label: 'Quantidade' }
  ]
}
