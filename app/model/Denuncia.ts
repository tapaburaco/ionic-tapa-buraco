import { Usuario } from '././Usuario';
import { Imagem } from '././Imagem';

export interface Denuncia {

  usuario: Usuario;
  email: string;
  telefone: string;
  imagens: Array<Imagem>;
  data: Date;
  
}