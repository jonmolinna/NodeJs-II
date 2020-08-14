const notesCtrl = {};

//Importando el modelo de la base de dato
const Note = require('../models/Note');

//Rutas
notesCtrl.renderNoteform = (req, res) => {
    //console.log(req.user) para ver el usuario logeado
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async (req, res) => {
    //req.boy => te permite ver los datos enviados del formulario
    const {title, description} = req.body;
    const newNote = new Note({title: title, description: description})
    //console.log(newNote)
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes');
}

notesCtrl.renderNotes = async (req, res) => {
    //Note.find() => permite hacer cosnulta a la base de datos
    const notes = await Note.find({user: req.user.id}).lean().sort({createdAt: 'desc'});
    res.render('notes/all-notes', {notes})
}

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    //console.log(note)
    if(note.user != req.user.id){
        req.flash('error_msg', 'Not Autherized');
        return res.redirect('/notes')
    }
    res.render('notes/edit-note', { note });
}

notesCtrl.updateNote = async (req, res) => {
    //console.log(req.body)
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    req.flash('success_msg', 'Note Update Successfully')
    res.redirect('/notes');
    //res.send('update note')
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully')
    res.redirect('/notes')
}

module.exports = notesCtrl;

