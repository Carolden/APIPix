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




async sendPix (req: Request, res: Response): Promise<any> {

  let senderId = 1;
  let recipientId = 2;
  let value = 50;

  let response = await fetch(`http://177.44.248.24/pix-api/pix/${senderId}/${recipientId}/${value}`);
  let data = await response.json();
  console.log(data)
  return res.status(200).json(data);

  }

}


