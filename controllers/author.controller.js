const {author,book}=require('../db').models

exports.getAllAuthors=async (req,res)=>{
    try {
        res.status(200).json(await author.findAll({
            include: {
                model: book,
                attributes: ['isbn','title']
            }
        }));
    }catch(err){
        res.status(500).json('internal error')
    }
}
exports.getAuthorById=async (req,res)=>{
    authorObj=await author.findByPk(req.params.id,{
        include: {
            model: book,
            attributes: ['isbn','title']
        }
    })
    if(authorObj!=null)
        res.status(200).json(authorObj)
    res.status(404).json({error:`Author with id ${req.params.id} does not exist`})  
}
exports.postAuthor=(req,res)=>{
    author.create(req.body).then(response=>{
        res.status(201).json(response)
    }).catch(err=>{
        res.status(400).json({message:err.errors[0].message})
    })
}
exports.deleteAuthorById=async (req,res)=>{
    authorObj=await author.findByPk(req.params.id)
    if(authorObj ==null)
        res.status(404).json({message:`Author with id ${req.params.id} does not exist`})

    author.destroy({
        where: { id: req.params.id }
    });
    res.status(200).json({
        message:"Author deleted successfully",
        author:authorObj
    });
}
exports.updateAuthor= async(req,res)=>{
    try {
        const { id } = req.params;
        const [updated] = await author.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedAuthor = await author.findByPk(req.body.id || id,{
                include: {
                    model: book,
                    attributes: ['isbn','title']
                }
            });
            return res.status(204).json({ user: updatedAuthor });
        }
        throw new Error('Author not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}