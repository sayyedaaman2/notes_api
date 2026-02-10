import db from '../model/note.model.js'

export function createNotes(req,res,next){
    try{
        let {title,content, tags} = req.body;

        if(!title || !content){
            return res.status(400).send({
                success : false,
                message : "'title' and 'content' is required"
            })
        }
        let data = db.createNote({title,content, tags})
        return res.status(201).send({
            message : "notes created successfully.",
            success : true,
            data
        })
    }catch(err){
        next(err)
    }
}
export function updateNotes(req,res,next){
    try{
        let id = req.params.id;
        if(!id){
            return res.status(400).send({
                success : false,
                message : "Id is not defined."
            })
        }
        let {title,content, tags} = req.body;

        
        let data = db.updateNote(Number(id),{title,content, tags})
        return res.status(201).send({
            message : "notes created successfully.",
            success : true,
            data
        })
    }catch(err){
        next(err)
    }
}

export function deleteNotes(req,res,next){
    try{
        let id = req.params.id
        if(!id){
            return res.status(400).send({
                success : false,
                message : "Id is not defined."
            })
        }
        let data = db.deleteNote(Number(id));
        return res.status(200).send({
            message : "notes delete successfully.",
            success : true,
            data
        })
    }catch(err){
        next(err)
    }
}

export function fetchNotes(req,res,next){
    try{
        let data;
        const id = req.params.id;
        if(id){
            data = db.getNotes(Number(id));
        }else{
            data = db.getNotes();
        }
        return res.status(200).send({
            message : "notes fetched successfully.",
            success : true,
            data
        })
    }catch(err){
        next(err)
    }
}