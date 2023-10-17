import { Router } from 'express';
import { PixController } from '../controllers/PixController';

let router: Router = Router();

let pixcontroller: PixController = new PixController();

router.get('/list', pixcontroller.list);

router.post('/sendpix/:senderid/:recipientid/:value', pixcontroller.sendPix);

// router.post('/pix', validarPayload, validarSeEmailExiste, pixcontroller.create);

// router.get('/pix/{userId}/{type}', validarSeExiste, validarPayload, validarSeEmailExiste, pixcontroller.update);

export default router;
