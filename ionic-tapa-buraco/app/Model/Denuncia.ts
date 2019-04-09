import { Usuario } from '././Usuario';
import { Imagem } from '././Imagem';

export class Denuncia {

  constructor(
    usuario: Usuario,
    email: string,
    telefone: string,
    imagens: Array<Imagem>
  ){}
}