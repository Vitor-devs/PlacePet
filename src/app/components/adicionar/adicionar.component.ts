import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {

  constructor(private http: HttpClient){}
  nome: string = ''
  idade?: number
  descricao: string = ''

  enviarDados() {
    
    const dados = {
      nome: this.nome,
      idade: this.idade,
      descricao: this.descricao
    };

    this.http.post('http://localhost:8000/api/adocao', dados)
      .subscribe(
        () => {
          console.log('Dados enviados com sucesso!');
          // Realize qualquer outra ação desejada após o envio dos dados.
        },
        (error) => {
          console.error('Erro ao enviar dados:', error);
        }
      );
  }
}