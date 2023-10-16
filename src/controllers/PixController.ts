import { Request, Response } from 'express';

export class PixController {

async list (req: Request, res: Response): Promise<any> {
    let response = await fetch(`http://177.44.248.24/pix-api/users`);
    let data = await response.json();

      return res.status(200).json(data);
    }

  }
