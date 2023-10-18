import { Request, Response } from 'express';

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

    // async sendPix(req: Request, res: Response): Promise<any> {
    //   const requestBody = {
    //     senderId: 10,
    //     recipientId: 11,
    //     value: 500.5
    //   };

    //   const response = await fetch('http://177.44.248.24/pix-api/pix', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(requestBody)
    //   });

    //   const data = await response.json();
    //   return res.json(data);
    // }

    async sendPix (req: Request, res: Response): Promise<any> {
      let response = await fetch(`http://177.44.248.24/pix-api/pix`);
      let data = await response.json();

        return res.status(200).json(data);
      }



      async search(userId: number, type: string) {
        const url = `http://177.44.248.24/pix-api/pix/${userId}/${type}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Erro ao obter dados PIX:', error);
        }
      }


}


