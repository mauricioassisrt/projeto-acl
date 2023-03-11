import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  login(): void {
    // Aqui você deve adicionar a lógica de autenticação
    // Caso as credenciais estejam corretas, redirecione o usuário para a tela home
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }
}
