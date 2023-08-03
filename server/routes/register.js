import { Router } from "express";
import { register } from '../controllers/register.js'

const router = Router();

router.post('/', register)

export default router;