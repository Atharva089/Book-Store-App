// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Spinner from '../components/Spinner'
// import { Link } from 'react-router-dom'
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

// const Home = () => {
//   const [books, setBooks] = useState([])
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);

//     axios.get('http//:localhost:5555/books')
//       .then((response) => {
//         setBooks(response.data.data)
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       })
//   }, [])

//   return (
//     <div className='p-4'>
//       <div className='flex justify-between items-center'>
//         <h1 className='text-3xl my-8'>Book list</h1>
//         <Link to='/books/create'>
//           <MdOutlineAddBox className='text-sky-800 text-4xl' />
//         </Link>
//       </div>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <table className='w-full border-separate border-spacing-2'>
//           <thead>
//             <tr>
//               <th className='border border-slate-600 rounded-md'>Sr No</th>
//               <th className='border border-slate-600 rounded-md'>Title</th>
//               <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
//               <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
//               <th className='border border-slate-600 rounded-md'>Operations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {books.map((book, index) => (
//               <tr key={books._id} className='h-8'>
//                 <td className='border border-slate-700 rounded-md text-center'>
//                   {index + 1}
//                 </td>

//                 <td className='border border-slate-700 rounded-md text-center'>
//                   {book.title}
//                 </td>

//                 <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                   {book.author}
//                 </td>

//                 <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                   {book.publishYear}
//                 </td>

//                 <td className='border border-slate-700 rounded-md text-center'>
//                   <div className='flex justify-center gap-x-4'>
//                     <Link to={`/books/details/${book._id}`}>
//                       <BsInfoCircle className='text-2xl text-green-800' />
//                     </Link>

//                     <Link to={`/books/edit/${book._id}`}>
//                       <AiOutlineEdit className='text-2xl text-yellow-600' />
//                     </Link>

//                     <Link to={`/books/delete/${book._id}`}>
//                       <MdOutlineDelete className='text-2xl text-red-800' />
//                     </Link>

//                   </div>
//                 </td>

//               </tr>
//             ))}
//           </tbody>



//         </table>
//       )}
//     </div>
//   )
// }

// export default Home



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useAsyncError } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}>Table
        </button>

        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('cards')}>Cards
        </button>

      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Book list</h1>
        <Link to='/books/create' >
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />) : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)
      }
    </div>
  );
};

export default Home;