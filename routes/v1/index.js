import {Router} from 'express';

import notesRoutes from './notes/index.js'
const router = Router();

router.use('/notes',notesRoutes)

export default router;