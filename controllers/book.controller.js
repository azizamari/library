const {book}=require('../db').models

exports.getAllBooks=async (req,res)=>{
    try {
        res.status(200).json(await book.findAll());
    }catch(err){
        res.status(500).json('internal error')
    }
}
exports.getBookById=async (req,res)=>{
    bookObj=await book.findByPk(req.params.isbn)
    if(bookObj!=null)
        res.status(200).json(bookObj)
    res.status(404).json({error:`Book with isbn ${req.params.isbn} does not exist`})  
}
exports.postBook=(req,res)=>{
    book.create(req.body).then(response=>{
        res.status(201).json(response)
    }).catch(err=>{
        res.status(400).json({message:err.errors[0].message})
    })
}
exports.deleteBookById=async (req,res)=>{
    bookObj=await book.findByPk(req.params.isbn)
    if(bookObj ==null)
        res.status(404).json({message:`Book with isbn ${req.params.isbn} does not exist`})

    book.destroy({
        where: { isbn: req.params.isbn }
    });
    res.status(200).json({
        message:"Book deleted successfully",
        book:bookObj
    });
}
