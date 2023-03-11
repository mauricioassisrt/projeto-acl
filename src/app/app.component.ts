import { Component } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService) {
  }
  title = 'projeto';
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
