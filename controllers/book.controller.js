const {book, author}=require('../db').models

exports.getAllBooks=async (req,res)=>{
    try {
        res.status(200).json(await book.findAll({
            include: {
              model: author,
              attributes: ['name', 'birthYear','gender'],
            },
          }));
    }catch(err){
        res.status(500).json('internal error')
    }
}
exports.getBookById=async (req,res)=>{
    bookObj=await book.findByPk(req.params.isbn,{
        include: {
          model: author,
          attributes: ['name', 'birthYear','gender'],  // return only these columns
        },
      })
    if(bookObj!=null)
        res.status(200).json(bookObj)
    res.status(404).json({error:`Book with isbn ${req.params.isbn} does not exist`})  
}
exports.postBook=async (req,res)=>{
    if(await author.findByPk(req.body.authorId)==null)
        res.status(404).json({message:`Author with id ${req.body.authorId} does not exist`})

    book.create(req.body).then(response=>{
        res.status(201).json(response)
    }).catch(err=>{
        res.status(400).json({message:err.errors[0].message})
    }).catch(err=>res.status(400).json({message:err}))
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
