import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Output() onCambioTema: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private sharedService: SharedService
  ) { }

  emitSidenav() {
    this.sharedService.changeToggleValue();
  }
}
