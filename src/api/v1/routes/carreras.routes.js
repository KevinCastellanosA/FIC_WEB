//Education
import { Router } from 'express';
import * as carrerasController from '../controllers/carreras.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get('/', carrerasController.getCarrerasList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', carrerasController.getCarrerasItem);
router.post('/', carrerasController.posCarrerasItem);
router.put('/:id', carrerasController.putCarrerasItem);
export default router;

