import { Usuario } from '././Usuario';
import { Imagem } from '././Imagem';

export interface Denuncia {

  usuario: Usuario;
  email: string;
  telefone: string;
  imagens: Array<Imagem>;
  cpf: string;
  rua: string;
  numero: number;
  pontoReferencia: string;
  data: Date;
  
}