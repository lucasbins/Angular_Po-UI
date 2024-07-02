import { Component, ViewChild } from '@angular/core';
import { PoDynamicFormComponent, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import {
  PoDynamicFormField,
  PoModalAction
} from '@po-ui/ng-components';
import { PoStorageService } from '@po-ui/ng-storage';

@Component({
  selector: 'app-novo-inventario',
  templateUrl: './novo-inventario.component.html',
  styleUrls: ['./novo-inventario.component.css']
})

export class NovoInventarioComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent
  @ViewChild('dynamicForm', { static: true}) poForm!: PoDynamicFormComponent
  @ViewChild('dynamicFormItem', { static: true}) poFormItem!: PoDynamicFormComponent

  poStorageService = new PoStorageService

  newInventario = []
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

  items: Array<any> = []

  confirm: PoModalAction = {
    action: () => {
      this.items.push(this.newItem)
      this.closeModal()
    },
    label: 'Adicionar Item',
  }

  closeModal() {
    this.newItem = {}
    this.poModal.close();
  }

  handleCancel() {
    this.poForm.form.reset()
  }

  handleSave(){
    this.poStorageService.appendArrayToArray('inventario', this.newInventario).then(() => {
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
