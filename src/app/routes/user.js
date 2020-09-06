import {
    Router
} from 'express';
import userController from '../controllers/user.controller';
const router = Router();

//router.post('/save', userController.save);
//router.post('/get', userController.get);
router.post('/getdata', userController.get);
module.exports = router;