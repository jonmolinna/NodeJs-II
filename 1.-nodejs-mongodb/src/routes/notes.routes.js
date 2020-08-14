const {Router} = require('express');
const router = Router();

//Importando Rutas
const {renderNoteform, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote} = require('../controllers/notes.controller');

//Importando para proteger rutas
const {isAuthenticated} = require('../helpers/auth')

//Creando Rutas
//New Note
router.get('/notes/add', isAuthenticated, renderNoteform);
router.post('/notes/new-note', isAuthenticated, createNewNote);

//Get All Note
router.get('/notes', isAuthenticated, renderNotes);

//Edit Note
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
router.put('/notes/edit/:id', isAuthenticated, updateNote);

//Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)


module.exports = router;