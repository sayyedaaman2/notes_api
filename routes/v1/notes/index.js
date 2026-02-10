import {Router} from 'express'
import {createNotes,deleteNotes,fetchNotes,updateNotes} from '../../../controller/notes.controller.js'
const router = Router();

// create notes
router.post('/',createNotes);


// update notes
router.put('/:id',updateNotes)

// delete notes
router.delete('/:id',deleteNotes)

// get notes
router.get('/',fetchNotes)
// get notes
router.get('/:id',fetchNotes)




export default router;