// import express, { request, response } from "express";
// import { PORT, mongoDBURL } from "./config.js";
// import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js"

// const app = express()

// app.use(express.json());

// app.get('/', (request, response) => {
//     console.log(request)
//     return response.status(234).send('Book Store App')
// })

// //ROUTE FOR SAVING A NEW BOOK
// app.post('/books', async (request, response) => {
//     try {
//         if (
//             !request.body.title ||
//             !request.body.author ||
//             !request.body.publishYear
//         ) {
//             return response.status(400).send({ message: 'Send all the required fields' })
//         }
//         const newBook = {
//             title: request.body.title,
//             author: request.body.author,
//             publishYear: request.body.publishYear
//         };

//         const book = await Book.create(newBook);
//         return response.status(201).send(book);

//     } catch (error) {
//         console.log(error.message)
//         return response.status(500).send({ message: error.message });
//     }
// })

// //ROUTE FOR GETTING ALL THE BOOKS
// app.get('/books', async (request, response) => {
//     try {
//         const books = await Book.find({})

//         return response.status(200).json({
//             count: books.length,
//             data: books
//         })
//     } catch (error) {
//         console.log(error.message)
//         return response.status(500).send({ message: error.message })
//     }
// })

// //ROUTE FOR GETTING A SINGLE BOOK USING ID
// app.get('/books/:id', async (request, response) => {
//     try {
//         const { id } = request.params;
//         const book = await Book.findById(id)

//         return response.status(200).json(book)
//     } catch (error) {
//         console.log(error.message)
//         return response.status(500).send({ message: error.message })
//     }
// })


// //ROUTE FOR UPDATING A BOOK
// app.put('/books/:id', async (request, response) => {
//     try {
//         if (
//             !request.body.title ||
//             !request.body.author ||
//             !request.body.publishYear
//         ) {
//             return response.status(400).send({ message: 'Send all the required fields' })
//         }

//         const { id } = request.params;

//         const result = await Book.findByIdAndUpdate(id, request.body)

//         if (!result) {
//             return response.status(404).json({ message: 'Book not found' })
//         }
//         return response.status(200).send({ message: 'Book updated successfully' })

//     } catch (error) {
//         console.log(error.message)
//         return response.status(500).send({ message: error.message })
//     }
// })
// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log('App is connected to database')
//         app.listen(PORT, () => {
//             console.log(`App is running at port ${PORT}`)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";  


const app = express();

// MIDDLEWARE FOR PARSING THE REQUEST BODY
app.use(express.json());

//TO PREVENT THE CORS Cross-Origin Resource Sharing POLICY - TO PREVENT THE SOME TO ACCESS A PAGE OF YOUR SITE WITHOUT GOING/VISITING THE ORIGIN PAGE

//2 OPTIONS - BY DEFAULT OR CUSTOM. WE WILL USE CUSTOM
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Book Store App');
});

app.use('/books', booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, () => {
            console.log(`App is running at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
