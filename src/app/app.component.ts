import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @HostBinding('class') componentCssClass: any;

  constructor(
    public overlayContainer: OverlayContainer,
  ) {
  }

  cambiarTema(cambio: boolean) {
    let tema: string;
    cambio ? tema = 'dark-theme' : tema = 'light-theme';
    this.overlayContainer.getContainerElement().classList.value = "cdk-overlay-container" + tema;
    this.componentCssClass = tema;

  }

}
