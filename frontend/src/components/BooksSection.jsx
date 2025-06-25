import React from 'react'
import axios from 'axios';

export const BooksSection = ({data}) => {

  const update = async (item) => {
  const newBookname = prompt("Enter new book name:", item.bookname);
  const newAuthor = prompt("Enter new author name:", item.author);
  const newImage = prompt("Enter new image URL:", item.image);
  const newPrice = prompt("Enter new price:", item.price);
  

  // Skip if user cancels any prompt
  if (!newBookname || !newAuthor || !newPrice||!newImage) return;

  try {
    const updatedItem = {
      ...item,
      bookname: newBookname,
      author: newAuthor,
      image:newImage,
      price: newPrice
    };
    const res = await axios.put(`http://localhost:1000/api/v1/updateBook/${item._id}`, updatedItem);
    alert(res.data.message);
    console.log(res);
  } catch (err) {
    console.error('Error updating:', err);
  }
};
   const del = async(item) => {
    try {
      const res = await axios.delete(`http://localhost:1000/api/v1/deleteBook/${item._id}`);
      alert(res.data.message); // Display the success message
      console.log(res);
    } catch (err) {
      console.error('Error deleting:', err);
    }}; 
    console.log(data); // Log the data to see its structure
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
       {data && data.map((item,index)=>
       <div key={item._id || index} className="" style={{width:"200px",height:"350px",margin:"10px", border:"1px solid white", borderRadius:"20px"}} > 
       <div>
        <img  style={{width:"200px",height:"210px"}}className="img-fluid" src={item.image} alt="/" />
       </div>
       <h5 style={{fontSize:"15px"}} className="px-2 my-2">{item.bookname.slice(0,20)}...</h5>{/* .slice used to cut text limit from 0 to 20 */}
       <p style={{fontSize:"30px", color:"red"}}  className="m-0 ">Rs. {item.price}</p>
       <div className="d-flex justify-content-around align-items-center">
       <button className="btn btn-primary" onClick={() => update(item)}>Update</button>
       <button className="btn btn-danger" onClick={() => del(item)}>Delete</button>{" "}
       </div>
       </div> 
       )}
    </div>
  )
}
