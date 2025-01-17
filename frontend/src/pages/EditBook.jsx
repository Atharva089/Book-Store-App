// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Spinner from '../components/Spinner'
// import BackButton from '../components/BackButton'
// import { useNavigate, useParams } from 'react-router-dom'


// const EditBook = () => {
//   const [title, setTitle] = useState('')
//   const [author, setAuthor] = useState('')
//   const [publishYear, setPublishYear] = useState('')
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate();
//   const { id } = useParams();
  
//   useEffect(() => {
//     setLoading(true)
//     axios.get(`http://localhost:5555/books/${id}`)
//       .then((response) => {
//         setAuthor(response.data.author)
//         setTitle(response.data.title)
//         setPublishYear(response.data.publishYear)
//         setLoading(false)
//       })
//       .catch((error)=>{
//         setLoading(false)
//         alert('An error occured. Please check the console')
//         console.log(error)
//       })
//   }, [])


//   const handleEditBook = () => {
//     const data = {
//       title,
//       author, publishYear,
//     };
//     setLoading(true);
//     axios
//       .put(`http://localhost:5555/books/${id}`, data)
//       .then(() => {
//         setLoading(false);
//         navigate('/');
//       })
//       .catch((error) => {
//         setLoading(false)
//         alert('An error occured. Please check the console')
//         console.log(error)

//       })
//   }

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl m-4'>Edit a book</h1>
//       {loading ? <Spinner /> : ''}

//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Title</label>
//           <input
//             type='text'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className='border-2 border-gray-500 px-4 w-full'
//           />
//         </div>

//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Author</label>
//           <input
//             type='text'
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className='border-2 border-gray-500 px-4 w-full'
//           />
//         </div>

//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
//           <input
//             type='number'
//             value={publishYear}
//             onChange={(e) => setPublishYear(e.target.value)}
//             className='border-2 border-gray-500 px-4 w-full'
//           />
//         </div>
//         <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
//           Save
//         </button>

//       </div>
//     </div>
//   )
// }

// export default EditBook




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import BackButton from '../components/BackButton';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditBook = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [publishYear, setPublishYear] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     axios.get(`http://localhost:5555/books/${id}`)
//       .then((response) => {
//         setAuthor(response.data.author);
//         setTitle(response.data.title);
//         setPublishYear(response.data.publishYear);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//         //alert('An error occurred while fetching the book data. Please check the console');
//         console.log('Error fetching book data:', error);
//       });
//   }, [id]);

//   const handleEditBook = () => {
//     const data = {
//       title,
//       author,
//       publishYear,
//     };
//     setLoading(true);
//     axios
//       .put(`http://localhost:5555/books/${id}`, data)
//       .then((response) => {
//         setLoading(false);
//         console.log('Book updated successfully:', response.data);
//         navigate('/');
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert('An error occurred while updating the book. Please check the console');
//         console.log('Error updating book:', error);
//       });
//   };

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl m-4'>Edit a book</h1>
//       {loading ? <Spinner /> : ''}

//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Title</label>
//           <input
//             type='text'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className='border-2 border-gray-500 px-4 w-full'
//           />
//         </div>

//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Author</label>
//           <input
//             type='text'
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className='border-2 border-gray-500 px-4 w-full'
//           />
//         </div>

//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
//           <input
//             type='number'
//             value={publishYear}
//             onChange={(e) => setPublishYear(e.target.value)}
//             className='border-2 border-gray-500 px-4 w-full'
//           />
//         </div>
//         <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditBook;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack'


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar()


  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred while fetching the book data. Please check the console');
        console.log('Error fetching book data:', error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        setLoading(false);
        console.log('Book updated successfully:', response.data);
        enqueueSnackbar('Book edited successfully', {variant: 'success'})

        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error occurred while updating the book. Please check the console');
        enqueueSnackbar('Error', {variant: 'error'})

        console.log('Error updating book:', error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl m-4'>Edit a book</h1>
      {loading ? <Spinner /> : ''}

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
