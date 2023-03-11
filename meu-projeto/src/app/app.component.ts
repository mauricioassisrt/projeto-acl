import { Component } from '@angular/core';
import {NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public abertoMenu: boolean = true
  constructor(private sidebarService: NbSidebarService) {
  }
  title = 'meu-projeto';
  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Dashboard',
      link: 'dashboard'
    }
  ];
  fecharMenu(): void {
    this.sidebarService.collapse('menu-sidebar');
    this.abertoMenu = false
  }

  abrirMenu(): void {
    this.sidebarService.expand('menu-sidebar');
    this.abertoMenu = true
  }
}
