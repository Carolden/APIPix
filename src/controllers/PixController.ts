import { Request, Response } from 'express';

export class PixController {

async list (req: Request, res: Response): Promise<any> {
    let response = await fetch(`http://177.44.248.24/pix-api/users`);
    let data = await response.json();

      return res.status(200).json(data);
    }

  


//   Body

// Example : { "senderId": 1, "recipientId": 2, "value": 50.5 }

// async create (req: Request, res: Response): Promise<Response> {
//   let body = req.body;

//   let senha = await bcrypt.hash(body.senha, 10);

//   let usuario: Usuario = await Usuario.create({
//     nome: body.nome,
//     email: body.email,
//     senha: senha,
//   }).save();

//   let { senha: s, ...usuarioSemSenha } = usuario;

//   return res.status(200).json(usuarioSemSenha);
// }

async sendPix (senderId: number, recipientId: number, value: number): Promise<any> {
  let response = await fetch(`http://177.44.248.24/pix-api/pix/${senderId}/${recipientId}/${value}`);
  let data = await response.json();
    return data;
  }

}


