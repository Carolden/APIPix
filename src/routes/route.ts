import { Router } from 'express';
import { PixController } from '../controllers/PixController';

let router: Router = Router();

let pixcontroller: PixController = new PixController();

router.get('/list', pixcontroller.list);

router.get('/listpix', pixcontroller.pix);

router.post('/sendpix', pixcontroller.sendPix);

// router.get('/pix/:userid/:type', pixcontroller.search);

export default router;
