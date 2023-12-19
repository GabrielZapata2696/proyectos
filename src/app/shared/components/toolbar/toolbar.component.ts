import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  constructor(
    private sharedService: SharedService
  ) { }

  emitSidenav() {
    this.sharedService.changeToggleValue();
  }
}
