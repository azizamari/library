const {author}=require('../db').models

exports.getAllAuthors=async (req,res)=>{
    try {
        res.status(200).json(await author.findAll());
    }catch(err){
        res.status(500).json('internal error')
    }
}
exports.getAuthorById=async (req,res)=>{
    res.status(200).json(await author.findById(req.params.id))
}
exports.postAuthor=async (req,res)=>{
    try{
        const record=await author.create(req.body);
        res.status(201).json(record)
    }catch(err){
        res.json(err)
    }
}