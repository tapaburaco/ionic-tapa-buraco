export class Usuario {
   
  nome: string;
  email: string;
  senha: string;
  cpf: number;

  constructor(
    nome: string,
    email: string,
    senha: string,
    cpf: number
  ){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cpf = cpf;
  }

  getUsuario(){
    
  }

}