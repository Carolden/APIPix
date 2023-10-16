import { Router } from 'express';
import { PixController } from '../controllers/PixController';

let router: Router = Router();

let pixcontroller: PixController = new PixController();

router.get('/batata', pixcontroller.list);

// router.get('/pix', validarSeExiste, usuariosController.find);

// router.post('/pix', validarPayload, validarSeEmailExiste, usuariosController.create);

// router.get('/pix/{userId}/{type}', validarSeExiste, validarPayload, validarSeEmailExiste, usuariosController.update);

export default router;
