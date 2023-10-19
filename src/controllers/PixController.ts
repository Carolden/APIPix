import { Request, Response } from 'express';
import fetch from 'node-fetch' //REMOVER EM CASO DE ERRO

export class PixController {

  async list (req: Request, res: Response): Promise<any> {
      let response = await fetch(`http://177.44.248.24/pix-api/users`);
      let data = await response.json();

        return res.status(200).json(data);
      }

  async pix (req: Request, res: Response): Promise<any> {
    let response = await fetch(`http://177.44.248.24/pix-api/pix`);
    let data = await response.json();

      return res.status(200).json(data);
    }

    async sendPix (req: Request, res: Response): Promise<any> {
      const requestBody = req.body;
      const response = await fetch(`http://177.44.248.24/pix-api/pix/`, {


        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    return res.status(200).json(data);

  };

    async search (req: Request, res: Response): Promise<any> {

      let userid = Number(req.params.userid);
      let type = (req.params.type);

      const response = await fetch(`http://177.44.248.24/pix-api/pix/${userid}/${type}`, {


        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();
    return res.status(200).json(data);

  };


}


