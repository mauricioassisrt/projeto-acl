import { Component } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  estado = {
    nome: '',
    sigla: ''
  };

  adicionarEstado() {
    console.log('Estado adicionado:', this.estado);
    // adicione o código para enviar os dados do estado para o backend aqui
  }
}