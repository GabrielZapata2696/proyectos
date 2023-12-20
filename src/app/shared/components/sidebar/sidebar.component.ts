import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { NavigationItem } from '../../interfaces/navigationItem.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  @ViewChild('drawer', { static: true })
  public sidenav!: any;

  @Output() onCambioTema: EventEmitter<boolean> = new EventEmitter();

  sideNavItems!: NavigationItem[]

  constructor(
    private sharedService: SharedService
  ) {

  }

  ngOnInit(): void {

    this.setSideNavItems();

    this.sharedService.getToggleValue().subscribe((value) => {
      this.sidenav.toggle();
    });
  }

  setSideNavItems() {
    this.sideNavItems = [
      { nombre: 'Por capital', url: '', icon: 'location_city' },
      { nombre: 'Por país', url: '', icon: 'south_america' },
      { nombre: 'Por región', url: '', icon: 'token' }
    ]
  }

  cambiarTema() {
    this.sharedService.cambiarTema = !this.sharedService.cambiarTema;
    this.onCambioTema.emit(this.sharedService.cambiarTema);
  }


}
