import { PoStorageService } from '@po-ui/ng-storage';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  listaInventario: Array<any> = []

  poStorageService = new PoStorageService

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}


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
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.poStorageService.getItemByField('inventario', 'id', this.id ).then(inv => this.inventario = inv)
    /* this.poStorageService.get('inventario').then((res: Array<any>) =>{
      this.inventario = res.find((inv) => inv.id == this.id)
      console.log(this.inventario)
    }) */
  }

  handleSave() {
    this.poStorageService.get('inventario').then((res: Array<any>) => {
      this.listaInventario = res.map((inv) => {
        if(inv.id === this.id){
          return this.inventario
        }
        return inv
      })
      this.poStorageService.set('inventario', this.listaInventario).then(() => {
        this.router.navigate(['/'])
      })
    })
  }

  columns: Array<PoTableColumn> = [
    { property: 'item', label: 'Item' },
    { property: 'localizacao', label: 'Localização' },
    { property: 'lote', label: 'Lote' },
    { property: 'quantidade', label: 'Quantidade' }
  ]
}
