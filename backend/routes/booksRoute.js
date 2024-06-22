//REFACTOR OUR ROUTES AS IF THE NUMBER OF ROUTES INCREASES, IT WILL BE LENGTHY
//SO A SEPERATE FILE FOR ROUTE 

import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// ROUTE FOR SAVING A NEW BOOK
router.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: 'Send all the required fields' });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// ROUTE FOR GETTING ALL THE BOOKS
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// ROUTE FOR GETTING A SINGLE BOOK USING ID
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
  
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json(book);
    } catch (error) {
      console.error('Error fetching book data:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

// ROUTE FOR UPDATING A BOOK
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, publishYear } = req.body;
  
      if (!title || !author || !publishYear) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, publishYear },
        { new: true }
      );
  
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  });

// ROUTE FOR DELETING A BOOK
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default router;