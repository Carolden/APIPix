import { Request, Response } from 'express';
import fetch from "node-fetch";
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

    async sendPix (senderId: number, recipientId: number, value: number): Promise<any> {
      let response = await fetch(`http://177.44.248.24/pix-api/pix/${senderId}/${recipientId}/${value}`);
      let body = req.body;

      



      let data = await response.json();
        return res.status(200).json(data);
      }

    // async search(userId: number, type: string) {
    //   const url = `http://177.44.248.24/pix-api/pix/${userId}/${type}`;

    //   try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    //   } catch (error) {
    //     console.error('Erro ao obter dados PIX:', error);
    //   }
    // }


}


