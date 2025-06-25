const router=require('express').Router();
const Book = require('../models/model'); 


//POST route to add a new book

router.post("/add",async (req,res)=>{
    try{
        const data=req.body; //to fetch data from the request body
        const newBook = new Book(data); //create a new book instance
        const savedBook = await newBook.save(); // clean async/await usage
        res.status(200).json({ message: "Book added successfully", book: savedBook });
//save the book to the database
    }catch(err){
        console.log(err);
        res.status(400).json({ message: err.message });
    }
})

//GET route to fetch all books
router.get("/getBooks",async (req,res)=>{
    let books;
    try{
        books = await Book.find(); //fetch all books from the database
        res.status(200).json(books); //send the books as a response
    }catch(err){
        console.log(err);
        res.status(400).json({ message: err.message });
    }
})

//GET route to fetch a book by ID
router.get("/getBook/:id",async (req,res)=>{
    let book;
    const id = req.params.id; //get the book ID from the request parameters
    try{
        book = await Book.findById(id); //fetch the book by ID from the database
        res.status(200).json(book); //send the book as a response
    }catch(err){
        console.log(err);
        res.status(400).json({ message: err.message });
    }
})

router.put("/updateBook/:id",async (req,res)=>{
    const id=req.params.id; //get the book ID from the request parameters
    const { bookname, description, author, image, price } = req.body; 
    let book//destructure the request body
    try{
       book= await Book.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price
        });
        await book.save(); //save the updated book to the database
        res.status(200).json({ message: "Book updated successfully", book }); //send the updated book as a response 
        }
        catch(err){
            console.log(err);
            res.status(400).json({ message: err.message });
        } //update the book by ID with the request body
    });

    //DELETE route to delete a book by ID
router.delete("/deleteBook/:id",async (req,res)=>{
    const id = req.params.id; //get the book ID from the request parameters
    try{
        await Book.findByIdAndDelete(id); //delete the book by ID from the database
        res.status(200).json({ message: "Book deleted successfully" }); //send a success message as a response
    }catch(err){
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

