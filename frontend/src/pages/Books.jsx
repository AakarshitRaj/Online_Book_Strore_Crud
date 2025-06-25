import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { BooksSection } from '../components/BooksSection';

export const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
        const fetch =async () => {
            await axios.get("http://localhost:1000/api/v1/getBooks")
                 .then((res)=>setBooks(res.data));//console to see path of data
        };
        fetch();
    });
  return (
    <div className="bg-dark" style={{minHeight:"91.5vh"}}>
        <div className='d-flex justify-content-center align-items-center py-3'>
        <h4 className="text-white">Book Section</h4>
        </div>
        {books ?
        (<BooksSection data={books}/>  //books is passed as prop to BooksSection component

        ):(
        <div className='text-white'>Loading...</div>)}
        </div>
  )
}
