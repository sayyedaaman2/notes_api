import {Router} from 'express'
import {createNotes,deleteNotes,fetchNotes,updateNotes} from '../../../controller/notes.controller.js'
import {createNoteValidator, paramValidator, updateNoteValidator} from '../../../validator/note.validator.js'
import validate from '../../../middleware/validate.js'
const router = Router();

// create notes
router.post('/' ,createNoteValidator,validate,createNotes);


// update notes
router.put('/:id',paramValidator,updateNoteValidator,validate,updateNotes)

// delete notes
router.delete('/:id',paramValidator,validate,deleteNotes)

// get notes
router.get('/',fetchNotes)
// get notes
router.get('/:id',paramValidator,validate,fetchNotes)




export default router;