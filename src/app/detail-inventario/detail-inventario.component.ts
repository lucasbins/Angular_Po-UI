import { PoStorageService } from '@po-ui/ng-storage';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoDynamicFormComponent, PoDynamicFormField, PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';

interface inventario {
  id: String,
  responsavel: string,
  deposito: string,
  criacao: Date,
  items: Array<any>
}

@Component({
  selector: 'app-detail-inventario',
  templateUrl: './detail-inventario.component.html',
  styleUrls: ['./detail-inventario.component.css']
})

export class DetailInventarioComponent implements OnInit{
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent
  @ViewChild('dynamicForm', { static: true }) poForm!: PoDynamicFormComponent
  @ViewChild('dynamicFormItem', { static: true }) poFormItem!: PoDynamicFormComponent

  id: string | null = '';

  inventario: inventario = {
    id: '',
    responsavel: '',
    deposito: '',
    criacao: new Date(),
    items: []
  }

  newItem = {}

  poStorageService = new PoStorageService

  constructor(
    private route: ActivatedRoute,
  ) {}

  listaInventario: Array<any> = []

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
      this.inventario?.items.push(this.newItem)
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


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.poStorageService.get('inventario').then((res: Array<any>) =>{
      this.inventario = res.find((inv) => inv.id == this.id)
      console.log(this.inventario)
    })
  }

  handleSave() {
    this.inventario.criacao = new Date()
    this.poStorageService.appendItemToArray('inventario', this.inventario).then(() => {
      console.log(this.inventario)
    })
  }

  columns: Array<PoTableColumn> = [
    { property: 'item', label: 'Item' },
    { property: 'localizacao', label: 'Localização' },
    { property: 'lote', label: 'Lote' },
    { property: 'quantidade', label: 'Quantidade' }
  ]
}
